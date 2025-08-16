import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';
import './login.css'

function Signup() {
    const [values, setValues] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [serverMessage, setServerMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
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
            try {
                const response = await axios.post('http://localhost:8081/signup', values);
                setServerMessage(response.data.message || "Signup successful! 🎉");
                setTimeout(() => navigate('/'), 2000);
            } catch (error) {
                const msg = error.response?.data?.message || "Registration failed. Please try again.";
                setServerMessage(msg);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="auth-container">
            {/* Left side: Branding */}
            <div className="auth-left">
                <h1 className="logo-text">
                    <span className="logo-cap">T</span>rip<span className="logo-cap">V</span>ista
                </h1>
                <h2>Already have an account?</h2><br />
                <h5>Log in to access your dashboard.</h5><br />
                <Link to="/login" className="btn btn-green">Log In</Link>
            </div>

            {/* Right side: Signup Form */}
            <div className="auth-right">
                <div className="auth-card">
                    <h2 className="text-center">SIGN UP</h2>
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
                            {isSubmitting ? "Signing up..." : "SIGN UP"}
                        </button>
                    </form>

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
