const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    console.log("Received Data:", req.body);
    console.log("Received Data:", firstName, lastName, email, message);

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: "Hey!, someone wants to connect with you.",
      html: `<div>
      <h2>Message from your portfolio</h2>
      <h3>First Name: ${firstName}</h3>
      <h3>Last Name: ${lastName}</h3>
      <h3>Email: ${email}</h3>
      <p>Message: ${message}</p>
  </div>`,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
