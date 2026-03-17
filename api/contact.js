import nodemailer from "nodemailer";

export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {

```
const {
  name,
  email,
  phone,
  company,
  service,
  project,
  message,
  budget
} = req.body;

if (!name || !email) {
  return res.status(400).json({
    error: "Name and Email are required"
  });
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "suraij@zonzoctech.com",
    pass: process.env.EMAIL_PASS
  }
});

const htmlBody = `
  <h2>New Website Inquiry</h2>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
  ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
  ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
  ${budget ? `<p><strong>Budget:</strong> $${budget}</p>` : ""}

  <h3>Project Details</h3>
  <p>${project || message || "-"}</p>
`;

const textBody = `
```

New Website Inquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Company: ${company || "-"}
Service: ${service || "-"}
Budget: ${budget || "-"}

Project:
${project || message || "-"}
`;

```
await transporter.sendMail({
  from: `"ZonzocTech Website" <suraij@zonzoctech.com>`,
  to: "suraij@zonzoctech.com",
  replyTo: email,
  subject: `New inquiry from ${name}`,
  text: textBody,
  html: htmlBody
});

return res.status(200).json({
  success: true,
  message: "Email sent successfully"
});
```

} catch (error) {

```
console.error("EMAIL ERROR:", error);

return res.status(500).json({
  error: "Email sending failed"
});
```

}
}
