require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

app.use(cors());
app.use(express.json());

// Set up SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Subscribe endpoint
app.post("/subscribe", async (req, res) => {
    try {
        const email = req.body.email;

        // Check if email is provided
        if (!email || typeof email !== "string") {
            return res.status(400).json({
                success: false,
                message: "Please enter your email address."
            });
        }

        // Remove unnecessary spaces
        const cleanEmail = email.trim();

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(cleanEmail)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address."
            });
        }

        // Check email configuration
        if (!process.env.SENDGRID_API_KEY ||
            !process.env.SENDGRID_FROM_EMAIL) {
            return res.status(500).json({
                success: false,
                message: "Email service is not configured."
            });
        }

        // Prepare welcome email
        const message = {
            to: cleanEmail,
            from: process.env.SENDGRID_FROM_EMAIL,
            subject: "Welcome to DEV@Deakin!",
            text: "Thank you for subscribing to our Daily Insider!"
        };

        // Send email
        await sgMail.send(message);

        return res.status(200).json({
            success: true,
            message: "Welcome email sent successfully! Please check your inbox."
        });

    } catch (error) {
        console.error(
            "Email error:",
            error.response?.body || error.message
        );

        return res.status(500).json({
            success: false,
            message: "We could not send your welcome email. Please try again later."
        });
    }

});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "The requested API endpoint was not found."
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
