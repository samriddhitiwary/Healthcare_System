// smtp.js
import nodemailer from "nodemailer";

const sendEmail = async (emailOptions) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pankajtiwary74@gmail.com",
      pass: "pcso uwjw iqik oztn", // Use an app password for security
    },
  });

  try {
    const info = await transporter.sendMail(emailOptions);
    return info; 
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};

export default sendEmail;
