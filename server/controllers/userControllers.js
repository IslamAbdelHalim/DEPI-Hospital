import mongoose from 'mongoose';
import multer from 'multer';
import sharp from 'sharp';
import User from '../models/user.js';
import catchError from '../middlewares/catchError.js';
import AppError from '../utils/appError.js';

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/')) {
    cb(new AppError('Please submit a a valid image', 401), false);
  } else {
    cb(null, true);
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

export const uploadImage = upload.single('photo');

export const resizeImage = async (req, res, next) => {
  if (!req.file) return next()

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({ quality: 90})
      .toFile(`images/users/${req.file.filename}`);

  next();
}

export const getUserById = catchError(async (req, res, next) => {
  const user = await User.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
    {
      $lookup: {
        from: 'bookings',
        localField: '_id',
        foreignField: 'user',
        as: 'bookings',
      },
    },
    {
      $project: {
        password: 0,
      },
    },
  ]);

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: user[0],
    },
  });
});

export const deleteUser = catchError(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

export const updateUser = catchError(async (req, res, next) => {
  if (typeof req.body.birthday === 'string') {
    const [day, month, year] = req.body.birthday.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    req.body.birthday = date;
  }

  if (req.file) {
    console.log(req.file)
    req.body.picture = req.file.filename;
  }

  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  }).select('-password');

  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
