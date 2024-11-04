# DEPI Hospital Management System

A comprehensive hospital management system built using the MEAN (MongoDB, Express, Angular, Node.js) stack, designed to streamline and improve the management of hospital services. This system enables efficient handling of patient appointments, lab test scheduling, and doctor consultations through a user-friendly interface.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The DEPI Hospital Management System was developed to address the specific needs of private hospitals by providing a digital platform for managing patient appointments, doctor schedules, radiology and lab tests, and more. The goal is to enhance service quality, reduce wait times, and create a seamless experience for both hospital staff and patients.

## Features

- **Patient Management**: Users can create profiles, book appointments, view test results, and access their medical history.
- **Doctor Management**: Doctors can manage appointments, update availability, and view patient records.
- **Appointment Scheduling**: Enables users to schedule, reschedule, or cancel appointments with doctors, labs, or radiology departments.
- **Lab and Radiology Integration**: Users can book lab tests or radiology services directly from the platform.
- **User Profile**: Patients can view their booked services, appointment status, and test results.
- **Admin Panel**: Centralized admin interface for managing doctors, departments, appointments, and test records.

## Technology Stack

- **Front-end**: Angular, Bootstrap (for responsive design)
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for schema modeling)

Additional tools:
- **Server-Side Rendering (SSR)**: Enabled with Angular Universal for optimized SEO and faster load times.
- **JWT**: For secure user authentication.

## Installation

### Prerequisites

- Node.js
- MongoDB
- Angular CLI

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/DEPI-Hospital.git
   cd DEPI-Hospital

2. Backend Setup
  Navigate to the server folder:
  ```bash
  cd server
  npm install
  npm start

3. Frontend setup
  Navigate to the client folder:
  ```bash
  cd client
  npm install
  ng serve

4. Open your browser and go to `http://localhost:4200/` to view the application.

## Usage

1. **Register/Login**: Users can create an account or log in using their credentials.
2. **Book Appointment**: Patients can schedule appointments with doctors, labs, or radiology departments.
3. **View Profile**: Users can access their profile, appointment history, and test results.
4. **Admin Dashboard**: Admins can manage doctors, departments, appointments, and test records.

## API Documentation

The API documentation for the DEPI Hospital Management System can be found [here](https://documenter.getpostman.com/view/your-documentation).

## Project Structure

The project is divided into two main folders: `client` (front-end) and `server` (back-end).

```bash
DEPI-Hospital/
├── client/
│   ├── public/assets/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── pipes/
│   │   │   ├── services/
│   │   ├── ...
│   ├── angular.json
│   ├── package.json
│   └── ...
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── utils/
│   ├── package.json

```

## Screenshots

![Home Page](../screenshots/clerify.jpg)
![Appointment Booking](../screenshots/Screenshot%202024-10-20%20204050.jpg)
![clinics Profile](../screenshots/Screenshot%202024-10-20%20194210.jpg)
![clinics Profile](../screenshots/Screenshot%202024-10-20%20194702.jpg)
![clinic Profile](../screenshots/Screenshot%202024-10-20%20194855.jpg)
![Responsive Design](../screenshots/Screenshot%202024-10-20%20220420.jpg)
![Responsive Design](../screenshots/Screenshot%202024-10-20%20220524.jpg)
![Responsive Design](../screenshots/)

## Future Improvements

- **Payment Integration**: Add payment gateways for online transactions.
- **Mobile App**: Develop a mobile application for Android and iOS users.
- **Telemedicine**: Integrate video consultation services for remote patient care.
- **Localization**: Add multi-language support for a global audience.

## Contributing

Contributions are welcome! Please refer to the [Contributing Guidelines](CONTRIBUTING.md) for detailed instructions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```