const nodemailer = require("nodemailer");

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail or any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email address from .env
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const mailOptions = {
    from: email, // Sender email (user's email)
    to: process.env.EMAIL_USER, // Your email address (to receive the message)
    subject: `New Contact Form Submission from ${name}`,
    text: `
      You have received a new message:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Your message was sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email. Please try again later." });
  }
});
