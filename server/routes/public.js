const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");


router.post('/send-mail', async (req, res) => {
  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "zonzoctech@gmail.com",
    pass: "bqnhdyrtexnmgezo",
  },
});
console.log(req.body);
const {email,website} = req.body;

  const info = await transporter.sendMail({
    from: '"ZonzocTech" <info@zonzoctech.com>',
    to: "zonzoctech@gmail.com",
    subject: "New Proposal Request",
    text: "New Proposal Request", // Plain-text version of the message
    html: "<b>Hello,</b><p>New Proposal Request is Received.</p><p>Website:"+website+"<br/>Email:"+email+"</p>", // HTML version of the message


  
})
console.log("Message sent:", info.messageId);
res.json({"message":info.messageId});
})

module.exports = router;