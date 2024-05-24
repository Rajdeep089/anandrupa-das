const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Other configurations and middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust the origin according to your frontend's URL
  })
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Contact@anandrupa.com", //enter you email
    pass: "Anandrupa@108", // enter you google mail app password (Generated)
  },
});
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, phone, message } = req.body;
  const mailOptions = {
    from: "rajan@golokait.com",
    to: "rajanpandeygiit31078379@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// Other routes and configurations

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
