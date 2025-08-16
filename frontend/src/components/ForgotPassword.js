import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleReset = async () => {
        const trimmedEmail = email.trim();
        const trimmedNew = newPassword.trim();
        const trimmedConfirm = confirmPassword.trim();

        if (!trimmedEmail || !trimmedNew || !trimmedConfirm) {
            setMessage("Please fill in all fields.");
            return;
        }

        if (trimmedNew !== trimmedConfirm) {
            setMessage("New password and confirm password do not match.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:8081/forgot-password", {
                email: trimmedEmail,
                newPassword: trimmedNew
            });

            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response?.data?.message || "Error resetting password.");
        }
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "slateblue"
        }}>
            <div style={{
                backgroundColor: "#fff",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                width: "100%",
                maxWidth: "400px",
                textAlign: "center"
            }}>
                <h2 style={{ marginBottom: "1.5rem" }}>🔑 Forgot Password</h2>

                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
                />

                <button
                    onClick={handleReset}
                    style={{
                        width: "100%",
                        padding: "0.75rem",
                        backgroundColor: "slateblue ",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "bold"
                    }}
                >
                    Reset Password
                </button>

                {message && (
                    <p style={{
                        marginTop: "1rem",
                        color: message.includes("successful") ? "green" : "red"
                    }}>
                        {message}
                    </p>
                )}

                <p style={{ marginTop: "1rem" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "slateblue" }}>
                        ← Back to Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;
