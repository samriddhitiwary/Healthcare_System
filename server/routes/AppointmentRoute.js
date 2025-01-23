import express from "express";
import { scheduleApointment, cancelAppointment, updateAppointment, getAllAppointmentsOfOnePatient } from "../controllers/AppointmentController.js";

const AppointmentRouter = express.Router();

AppointmentRouter.post("/scheduleApointment",scheduleApointment);
AppointmentRouter.put("/updateAppointment/:id",updateAppointment);
AppointmentRouter.put("/cancelAppointment/:id",cancelAppointment);
AppointmentRouter.get("/getAllAppointmentsOfOnePatient/:id",getAllAppointmentsOfOnePatient);

export default AppointmentRouter;
