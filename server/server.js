// server.js
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/ProfileRoute.js";
import doctorRoute from "./routes/DoctorRoute.js";
import AppointmentRouter from "./routes/AppointmentRoute.js";
import getValueforBPRouter from "./routes/BloodPressure.js";
import getValueforSugarLevelRouter from "./routes/SugarLevelRoute.js";
import getValueforWeightRouter from "./routes/WeightRouter.js";
import getPDFrouter from "./routes/PdfRoute.js";
import * as scheduler from "node-cron"; 
import sendEmail from "./email/smtp.js"; 
import Appointment from "./models/AppointmentModel.js"; // Corrected model import
import User from "./models/ProfileModel.js"; // Corrected model import
import DoctorModel from "./models/DoctorModel.js";
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection failed:", error);
  });

app.use("/api/user", userRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/appointment", AppointmentRouter);
app.use("/api/healthrecord", getValueforBPRouter);
app.use("/api/healthrecord", getValueforSugarLevelRouter);
app.use("/api/healthrecord", getValueforWeightRouter);
app.use("/api/pdfdetails", getPDFrouter);

scheduler.schedule("12 10 * * *", async () => { // Runs every day at 10:02 AM
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const dayAfter = new Date(tomorrow);
    dayAfter.setDate(dayAfter.getDate() + 1);

    // Find appointments scheduled for tomorrow
    const appointments = await Appointment.find({
      date: { $gte: tomorrow, $lt: dayAfter },
    });

    for (const appointment of appointments) {
      const user = await User.findById(appointment.patientId);
      const doctor = await DoctorModel.findById(appointment.doctorId);
      if (user) {
        const mailOptions = {
          from: "pankajtiwary74@gmail.com",
          to: user.email,
          subject: "Appointment Reminder",
          text: `Dear ${user.fname},\n\nThis is a reminder for your appointment with Dr. ${doctor.fname} ${doctor.lname} tomorrow at ${doctor.date}.\n\nThank you!`,
        };

        // Send email reminder
        await sendEmail(mailOptions);
        console.log("Email sent successfully for appointment with:", appointment.patientId);
      }
    }
  } catch (error) {
    console.error("Error while sending email reminders:", error);
  }
});
