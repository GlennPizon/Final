// src/utils/send-email.ts
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const from = process.env.SMTP_USER;

export async function sendEmail(to: string, subject: string, html: string, fromEmail = from) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: fromEmail,
    to,
    subject,
    html
  });
}
