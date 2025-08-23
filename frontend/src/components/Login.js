import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import './login.css';

function Login() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Proceed only if there are no validation errors
    if (validationErrors.email === "" && validationErrors.password === "") {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data.message === "Login successful") {
            // Save username to localStorage
            const username = res.data.username || res.data.name || values.email.split('@')[0];
            localStorage.setItem('username', username);
            localStorage.setItem('isLoggedIn', 'true');

            // Redirect after login
            navigate('/holiday');
          } else {
            alert(res.data.message || "Login failed");
          }
        })
        .catch(err => {
          console.error("Login error:", err);
          alert("Server error. Please try again.");
        });
    }
  };

  return (
    <div className="auth-container">
      {/* Left Panel */}
      <div className="auth-left">
        <h1 className="logo-text">
          <span className="logo-cap">T</span>rip<span className="logo-cap">V</span>ista
        </h1>
        <h2>Don't have an account?</h2>
        <h5>Sign up to save all your graph.</h5>
        <Link to="/Signup" className="btn btn-green">Sign Up</Link>
      </div>

      {/* Right Panel */}
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="text-center">LOG IN</h2>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label><strong>Email</strong></label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                className="form-control"
                required
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label><strong>Password</strong></label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                className="form-control"
                required
              />
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-green w-100">LOG IN</button>
            <p className="text-end mt-2">
              <Link to="/forgot-password">FORGET PASSWORD?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
