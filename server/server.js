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
import Appointment from "./models/AppointmentModel.js"; 
import User from "./models/ProfileModel.js"; 
import DoctorModel from "./models/DoctorModel.js";
import meals from "./routes/NutrientsRoute.js";

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
app.use("/api/nutrients",meals);


scheduler.schedule("10 2 * * *", async () => { 
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const dayAfter = new Date(tomorrow);
    dayAfter.setDate(dayAfter.getDate() + 1);

    
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
          html: `
            <html>
              <body style="font-family: Arial, sans-serif; color: #333;">
                <div style="background-color: #f4f4f4; padding: 20px; text-align: center; border-radius: 10px; width: 80%; margin: 0 auto;">
                  <h2 style="color: #4CAF50;">Reminder: Your Appointment is Tomorrow!</h2>
                  <p>Dear ${user.fname},</p>
                  <p>This is a friendly reminder that you have an appointment with ${doctor.fname} ${doctor.lname} tomorrow</strong>.</p>
                  <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <h3 style="color: #4CAF50;">Appointment Details:</h3>
                    <p><strong>Doctor:</strong> Dr. ${doctor.fname} ${doctor.lname}</p>
                    <p><strong>Date:</strong> ${appointment.date.toLocaleDateString()}</p>
                   
                  </div>
                  <p style="margin-top: 20px;">We look forward to seeing you!</p>
                  <p style="font-size: 0.9em; color: #777;">If you have any questions, feel free to reach out.</p>
                  <p style="font-size: 0.8em; color: #999;">Thank you for choosing our services.</p>
                </div>
              </body>
            </html>
          `,
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
