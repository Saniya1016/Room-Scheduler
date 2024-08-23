# Room Scheduler

## Overview

**Room Scheduler** is a user-friendly web application designed to streamline the process of reserving meeting rooms based on user preferences. It offers robust functionality for both users and administrators, ensuring efficient room management and booking.

## Features

- **User Registration**: Users can create accounts by providing their basic information, such as name, email, and password.
- **User Authentication**: Secure login ensures that only registered users can access the application's features.
- **Meeting Room Listing**: Browse available meeting rooms with details like capacity, amenities, and availability.
- **Search and Filters**: Find meeting rooms using criteria such as location, capacity, amenities, or availability.
- **Booking Management**: Book meeting rooms for desired times, view, and manage existing bookings.
- **Administrative Access**:
  - **Room Management**: Administrators can add new rooms, update room details, and control room availability.
  - **User Management**: Administrators can view and manage user accounts, including creating, modifying, and disabling accounts.

## Technical Details

- **Back-End**: Developed using Node.js, providing a robust environment for handling room reservations and user data.
- **Algorithm**: Implemented an efficient algorithm for determining room availability based on requested times.
- **Database**: Utilized MongoDB for storing user and room information, ensuring reliable data management.
- **User Authentication**: Integrated secure authentication with Passport.js.
- **Front-End**: Designed and implemented using HTML and CSS to ensure a clean and responsive user interface.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Saniya1016/Room-Scheduler.git
   ```

2. **Install Dependencies**:
   - Navigate to the project directory and install required packages:
     ```bash
     npm install
     ```

3. **Set Up the Database**:
   - Ensure MongoDB is running and configure the database connection as needed.

4. **Run the Application**:
   ```bash
   npm start
   ```

-----------------------------------
