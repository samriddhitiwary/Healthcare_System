import nodemailer from "nodemailer";
import { getTomorrrowAppointment } from "../controllers/AppointmentController.js";
import { response } from "express";
import User from "../models/ProfileModel.js";
import DoctorProfile from "../models/DoctorModel.js";



export const sendEmail = async () => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: "pankajtiwary74@gmail.com",
      pass: "pcso uwjw iqik oztn",
    },
  });
  //   pcso uwjw iqik oztn
  const mailOptions = {
    from: "pankajtiwary74@gmail.com",
    to: "samriddhi.tiwary01@gmail.com",
    subject: "Hello from Nodemailer",
    text: "This is a test email sent using Nodemailer.",
  };
  console.log("jnfc oifpi  ");

  

  const listofAppointment = await getTomorrrowAppointment();
  for (let i = 0; i < listofAppointment.length; i++) {
    const appointment = listofAppointment[i];
    const patient = await User.findById(appointment.patientId);
    // console.log(patient);

    const doctor = await DoctorProfile.findById(appointment.doctorId);
    // console.log(doctor);
    let email_msg = `You have an Appointment tomorrow with ${doctor.fname} ${doctor.lname}`;

    const mailOptions = {
      from: "pankajtiwary74@gmail.com",
      to: patient.email,
      subject: "Appointment Reminder for Tomorrow",
      text: email_msg,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });

    console.log(email_msg);
  }
  return listofAppointment;

};