import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus("Message sent successfully!");
        e.target.reset(); // Clear the form
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
        {formStatus && <p>{formStatus}</p>}
      </div>
    </div>
  );
};

export default Contact;
