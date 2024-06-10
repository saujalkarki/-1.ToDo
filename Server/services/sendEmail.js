const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOption = {
    from: "ToDo_MERN_Project <sewantakarki80@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
