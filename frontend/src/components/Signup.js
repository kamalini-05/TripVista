import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';
import './login.css';

function Signup() {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [inputCode, setInputCode] = useState('');

  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerMessage("");
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
      setIsSubmitting(true);

      // 1. Generate random 6-digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setVerificationCode(code);

      try {
        // 2. Send code to user's email via backend
        await axios.post('http://localhost:8081/send-verification', {
          to: values.email,
          code: code,
        });

        setServerMessage("A verification code has been sent to your email.");
        setShowVerification(true);
      } catch (error) {
        console.error(error);
        setServerMessage("Failed to send verification code. Try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (inputCode === verificationCode) {
      try {
        // 3. Complete signup if code is correct
        const response = await axios.post('http://localhost:8081/signup', values);
        setServerMessage(response.data.message || "Signup successful!");
        setTimeout(() => navigate('/login'), 2000);
      } catch (error) {
        console.error(error);
        setServerMessage("Registration failed. Please try again.");
      }
    } else {
      setServerMessage("Incorrect verification code. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      {/* Left Branding Panel */}
      <div className="auth-left">
        <h1 className="logo-text">
          <span className="logo-cap">T</span>rip<span className="logo-cap">V</span>ista
        </h1>
        <h2>Already have an account?</h2><br />
        <h5>Log in to access your dashboard.</h5><br />
        <Link to="/login" className="btn btn-green">Log In</Link>
      </div>

      {/* Right Form Panel */}
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="text-center">SIGN UP</h2>

          {!showVerification ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label><strong>Fullname</strong></label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  className="form-control"
                  value={values.name}
                  required
                />
                {errors.name && <span className="text-danger">{errors.name}</span>}
              </div>

              <div className="mb-3">
                <label><strong>Email</strong></label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInput}
                  className="form-control"
                  value={values.email}
                  required
                />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </div>

              <div className="mb-3">
                <label><strong>Password</strong></label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInput}
                  className="form-control"
                  value={values.password}
                  required
                />
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-green w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Code..." : "SEND VERIFICATION CODE"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify}>
              <div className="mb-3">
                <label><strong>Enter Verification Code</strong></label>
                <input
                  type="text"
                  maxLength="6"
                  onChange={(e) => setInputCode(e.target.value)}
                  className="form-control"
                  value={inputCode}
                  required
                />
              </div>
              <button type="submit" className="btn btn-green w-100">VERIFY & SIGN UP</button>
            </form>
          )}

          {serverMessage && (
            <div className="alert alert-info mt-3 text-center">
              {serverMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
