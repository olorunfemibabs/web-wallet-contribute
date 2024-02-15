const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const uuid = require("uuid");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: 0,
  auth: {
    user: "mayowapublic@gmail.com", // Gmail email address
    pass: "awezzvacmuvklcuy", // Gmail password (or app-specific password)
  },
});

let otpMap = new Map(); // Map to store email-OTP pairs

app.post("/generate-otp", (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP

  // Store OTP in the map with the email as the key
  otpMap.set(email, otp);

  // Send OTP to user's email
  const mailOptions = {
    from: "mayowapublic@gmail.com", // Gmail email address
    to: email,
    subject: "Your OTP for Sign In",
    text: `Your OTP for sign in is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Failed to send OTP");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("OTP sent successfully");
    }
  });
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  // Check if the entered OTP matches the OTP stored for the email
  if (otpMap.has(email) && otpMap.get(email) == otp) {
    // Correct OTP, grant access
    res.status(200).send("OTP verified successfully. Grant access!");
  } else {
    // Incorrect OTP
    res.status(400).send("Invalid OTP");
  }
});

//e-memory database
