const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'kamalini',
  password: 'kamalini',
  database: 'signup'
});

// ✅ Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'TripVistaaTourism@gmail.com',
    pass: 'TripVistaa511hk' // 🔐 Use Gmail App Password
  }
});

// ✅ Send Verification Code via Email
app.post('/send-verification', (req, res) => {
  const { to, code } = req.body;
  if (!to || !code) {
    return res.status(400).json({ message: 'Email and code are required.' });
  }

  const mailOptions = {
    from: 'TripVistaaTourism@gmail.com',
    to,
    subject: 'TripVista Email Verification Code',
    text: `Your verification code is: ${code}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Mail error:", error);
      return res.status(500).json({ message: 'Failed to send email.' });
    }
    res.status(200).json({ message: 'Verification code sent successfully.' });
  });
});

// ✅ Signup (Assumes already verified client-side)
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, email, password, verified) VALUES (?, ?, ?, true)';
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(201).json({ message: 'Signup successful. User verified.' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// ✅ Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid email or password' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Password didn't match" });

    const updateSql = 'UPDATE users SET login_count = login_count + 1, last_login = NOW() WHERE id = ?';
    db.query(updateSql, [user.id], (updateErr) => {
      if (updateErr) console.error('Login tracking error:', updateErr);
      res.status(200).json({
        message: 'Login successful',
        username: user.username,
        user: {
          id: user.id,
          email: user.email,
          login_count: user.login_count + 1,
          last_login: new Date().toISOString()
        }
      });
    });
  });
});

// ✅ Forgot Password
app.post('/forgot-password', async (req, res) => {
  const { email, newPassword } = req.body;
  const trimmedEmail = email?.trim();
  const trimmedPassword = newPassword?.trim();

  if (!trimmedEmail || !trimmedPassword) {
    return res.status(400).json({ message: 'Please enter both your email and new password to proceed.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(trimmedPassword, 10);
    const sql = 'UPDATE users SET password = ? WHERE email = ?';
    db.query(sql, [hashedPassword, trimmedEmail], (err, result) => {
      if (err) return res.status(500).json({ message: 'Server error. Please try again later.' });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'No account found with that email.' });
      }
      res.status(200).json({ message: '✅ Password reset successful.' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during password reset.' });
  }
});

// ✅ Flight Search
app.post('/api/search', (req, res) => {
  const {
    tripType,
    fromState,
    toState,
    fromAirport,
    toAirport,
    departure,
    returnDate,
    passengers,
    fareOptions
  } = req.body;

  const query = `INSERT INTO flight_search (
    tripType, fromState, toState, fromAirport, toAirport,
    departureDate, returnDate, passengers, fareOptions
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [
    tripType,
    fromState,
    toState,
    fromAirport,
    toAirport,
    departure,
    returnDate || null,
    passengers,
    fareOptions.join(', ')
  ], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Search saved successfully', id: result.insertId });
  });
});

// ✅ Server Start
app.listen(8081, () => {
  console.log('✅ Unified server running on http://localhost:8081');
});
