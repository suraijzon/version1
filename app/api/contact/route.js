import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { name, email, phone, company, message, service, project, budget, website } = body || {};

  // Honeypot: real users never see the "website" field, so a filled value means a bot.
  // Pretend success so the bot gets no signal, but don't send anything.
  if (typeof website === 'string' && website.trim() !== '') {
    return NextResponse.json({ success: true });
  }

  const cleanName = typeof name === 'string' ? name.trim() : '';
  const cleanEmail = typeof email === 'string' ? email.trim() : '';
  if (!cleanName) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }
  if (!cleanEmail || !EMAIL_RE.test(cleanEmail)) {
    return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
      <h3>New Message from Website</h3>
      <p><b>Name:</b> ${escapeHtml(cleanName)}</p>
      <p><b>Email:</b> ${escapeHtml(cleanEmail)}</p>
      ${phone ? `<p><b>Phone:</b> ${escapeHtml(phone)}</p>` : ''}
      ${company ? `<p><b>Company:</b> ${escapeHtml(company)}</p>` : ''}
      ${service ? `<p><b>Service:</b> ${escapeHtml(service)}</p>` : ''}
      ${budget ? `<p><b>Budget:</b> $${escapeHtml(budget)}</p>` : ''}
      ${project ? `<p><b>Project:</b> ${escapeHtml(project)}</p>` : ''}
      ${message ? `<p><b>Message:</b> ${escapeHtml(message)}</p>` : ''}
    `;

    await transporter.sendMail({
      from: `"Zonzoctech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.EMAIL_USER,
      replyTo: cleanEmail,
      subject: `New message from ${cleanName.replace(/[\r\n]+/g, ' ')}`,
      html: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('EMAIL ERROR:', error);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
