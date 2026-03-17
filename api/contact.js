import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, company, message, service, project, budget } = req.body;

  try {

    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "suraij@zonzoctech.com",
    pass: process.env.EMAIL_PASS
      }
    });

    const htmlBody = `
      <h2>New Website Inquiry</h2>

      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>Email:</strong> ${email || "-"}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
      ${budget ? `<p><strong>Budget:</strong> $${budget}</p>` : ""}
      ${project ? `<p><strong>Project Details:</strong> ${project}</p>` : ""}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
    `;

    const textBody = `
New Website Inquiry

Name: ${name || "-"}
Email: ${email || "-"}
Phone: ${phone || "-"}
Company: ${company || "-"}
Service: ${service || "-"}
Budget: ${budget || "-"}

Message:
${project || message || "-"}
`;

    await transporter.sendMail({
      from: '"ZonzocTech Website" <suraij@zonzoctech.com>',
      to: "suraij@zonzoctech.com",
      replyTo: email || "suraij@zonzoctech.com",
      subject: `New message from ${name || "Website Visitor"}`,
      text: textBody,
      html: htmlBody
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email sending failed" });
  }
}