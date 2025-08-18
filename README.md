# 🧳 TripVista — Designed by Kamalini and Hariini

A modular ReactJS interface for flight search and user authentication, built with precision and emotional clarity. This project includes dynamic calendar logic, modal selectors, and summary updates — all styled for a compact, dark-themed layout.

---

## 🔧 Features

- 🔐 **Authentication**
  - Login, Signup, Forgot Password
  - Input validation (email, password, empty fields)
  - Error messages and field-level feedback

- ✈️ **Flight Search**
  - From/To airport selectors
  - Calendar pickers for departure and return
  - Passenger and class selectors
  - Summary panel updates dynamically

- 🧱 **UI Components**
  - `Navbar.jsx`
  - `Login.jsx`, `Signup.jsx`, `ForgotPassword.jsx`
  - `FlightSearch.jsx`, `CalendarPopup.jsx`, `PassengerModal.jsx`

---

## 🛠️ Commands

# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm start

🌐 Push Project to GitHub

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Update"

# Add your GitHub repo URL
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git push -u origin main

## MySQL Table Creation Commands

 # -- Create the database
CREATE DATABASE signup;
USE signup;

# -- Create users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  login_count INT DEFAULT 0,
  last_login DATETIME DEFAULT NULL,
  verified TINYINT(1) DEFAULT 0
);

#  Create flight_search table
CREATE TABLE flight_search (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  from_airport VARCHAR(100),
  to_airport VARCHAR(100),
  departure_date DATE,
  return_date DATE,
  passengers INT DEFAULT 1,
  travel_class VARCHAR(50),
  searched_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

# Show tables
SHOW TABLES;

# Select data
SELECT * FROM users;
SELECT * FROM flight_search;