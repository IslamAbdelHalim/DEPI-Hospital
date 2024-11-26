import express from 'express';
import {
  getUserById,
  deleteUser,
  updateUser,
  uploadImage,
  resizeImage
} from '../controllers/userControllers.js';
import { validateRoute } from '../controllers/authControllers.js';

const userRouter = express.Router();

userRouter
  .route('/:id')
  .get(validateRoute, getUserById)
  .delete(validateRoute, deleteUser);

userRouter.route('/update').patch(validateRoute,uploadImage, resizeImage, updateUser);

export default userRouter;
