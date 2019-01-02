module.exports = {
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: JSON.parse(process.env.SMTP_SECURE), // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS
    }
  },

  meta: {
    fromName: process.env.SMTP_FROM_NAME,
    fromEmail: process.env.SMTP_FROM_EMAIL,
    subject: "Status Update"
  }
};
