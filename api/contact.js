import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Get all possible fields from both forms
  const { name, email, phone, company, message, service, project, budget } = req.body;

  try {
    // Create mail transporter
    const transporter = nodemailer.createTransport({
      host: "mail.zonzoctech.com", // your cPanel mail server
      port: 465,
      secure: true,
      auth: {
        user: "info@zonzoctech.com",
        pass: process.env.EMAIL_PASS, // store your password securely
      },
    });

    // Prepare email body dynamically
    let emailBody = `
      <h3>New Message from Website</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
      ${company ? `<p><b>Company:</b> ${company}</p>` : ""}
      ${service ? `<p><b>Service:</b> ${service}</p>` : ""}
      ${budget ? `<p><b>Budget:</b> $${budget}</p>` : ""}
      ${project ? `<p><b>Project Details:</b> ${project}</p>` : ""}
      ${message ? `<p><b>Message:</b> ${message}</p>` : ""}
    `;

    // Send email
    await transporter.sendMail({
      from: `"Zonzoctech Website" <info@zonzoctech.com>`,
      to: "info@zonzoctech.com",
      subject: `New message from ${name}`,
      html: emailBody,
    });

    // Respond to React
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email sending failed" });
  }
}