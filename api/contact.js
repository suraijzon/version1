import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, company, message, service, budget } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.zonzoctech.com",
      port: 587,
      secure: false, // use true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP connection (optional but helpful)
    await transporter.verify();

    await transporter.sendMail({
      from: `"Zonzoctech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email, // so you can reply directly to client
      subject: `New message from ${name}`,
      html: `
        <h3>New Website Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
        ${company ? `<p><b>Company:</b> ${company}</p>` : ""}
        ${service ? `<p><b>Service:</b> ${service}</p>` : ""}
        ${budget ? `<p><b>Budget:</b> $${budget}</p>` : ""}
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      error: error.message || "Email sending failed",
    });
  }
}