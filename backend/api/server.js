const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
const nodemailer = require("nodemailer"); // Add Nodemailer for email functionality
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001; // Use environment variable for port or fallback to 5001

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Logging Middleware (for debugging requests)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
});

// OpenAI Client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use API key from environment variables
});

// Chatbot API Endpoint
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  // Validate input
  if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
    return res.status(400).json({ error: "Invalid prompt provided." });
  }

  try {
    // Send request to OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    });

    // Respond with OpenAI's response
    res.status(200).json({
      response: completion.choices[0]?.message?.content || "No response received.",
    });
  } catch (error) {
    console.error("Error while communicating with OpenAI API:", error);

    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data.error.message || "An error occurred with OpenAI API.",
      });
    } else {
      res.status(500).json({ error: "Internal server error. Please try again later." });
    }
  }
});

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail or any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email from .env
    pass: process.env.EMAIL_PASS, // Your email password or app password from .env
  },
});

// Contact Form API Endpoint
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const mailOptions = {
    from: email, // Sender's email (user submitting the form)
    to: process.env.EMAIL_USER, // Your email address to receive the submissions
    subject: `New Contact Form Submission from ${name}`,
    text: `
      You have received a new message:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Your message was sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send your message. Please try again later." });
  }
});

// Health Check Endpoint
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running!" });
});

// Catch-All for Invalid Routes
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found." });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
