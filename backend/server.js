const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "kamalini",
    password: "kamalini",
    database: "signup"
});

// 🔐 Signup
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (username, email, password, verified) VALUES (?, ?, ?, true)";

        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ message: "Email already exists" });
                }
                return res.status(500).json({ message: "Database error", error: err });
            }

            res.status(201).json({ message: "Signup successful. User verified." });
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// 🔓 Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Server error" });
        if (results.length === 0) return res.status(401).json({ message: "Invalid email or password" });

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) return res.status(401).json({ message: "Password didn't match" });

        // ✅ Update login count and last login timestamp
        const updateSql = "UPDATE users SET login_count = login_count + 1, last_login = NOW() WHERE id = ?";
        db.query(updateSql, [user.id], (updateErr) => {
            if (updateErr) {
                console.error("Login tracking error:", updateErr);
                // Optional: continue even if tracking fails
            }

            res.status(200).json({
                message: "Login successful",
                user: {
                    id: user.id,
                    username: user.username,
                    login_count: user.login_count + 1,
                    last_login: new Date().toISOString()
                }
            });
        });
    });
});


// 🔑 Forgot Password
app.post("/forgot-password", async (req, res) => {
    const { email, newPassword } = req.body;

    const trimmedEmail = email?.trim();
    const trimmedPassword = newPassword?.trim();

    if (!trimmedEmail || !trimmedPassword) {
        return res.status(400).json({
            message: "Please enter both your email and new password to proceed."
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(trimmedPassword, 10);
        const sql = "UPDATE users SET password = ? WHERE email = ?";

        db.query(sql, [hashedPassword, trimmedEmail], (err, result) => {
            if (err) {
                console.error("🔧 Password reset error:", err);
                return res.status(500).json({ message: "Server error. Please try again later." });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "No account found with that email." });
            }

            res.status(200).json({ message: "✅ Password reset successful." });
        });
    } catch (error) {
        console.error("🔒 Hashing error:", error);
        res.status(500).json({ message: "Server error during password reset." });
    }
});



// 🚀 Start server
app.listen(8081, () => {
    console.log("✅ Server is running on http://localhost:8081");
});
