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
// import meals from "./routes/NutrientsRoute.js";
import * as scheduler from "node-cron"; 
import { sendEmail } from "./email/smtp.js";

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
// app.use("/api/nutrients", meals);

// Scheduler to send email reminders at 08:55 AM every day
scheduler.schedule("34 09 * * *", async () => {
  try {
    const result = await sendEmail();
    console.log("Email reminder sent successfully:", result);
  } catch (error) {
    console.error("Error while sending email reminders:", error);
  }
});
