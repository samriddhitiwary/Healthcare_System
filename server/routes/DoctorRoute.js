import express from "express";

import {createDoctorProfile, getAllDoctors} from "../controllers/DoctorController.js";

const doctorRoute = express.Router();

doctorRoute.post("/createDoctorProfile", createDoctorProfile);
doctorRoute.get("/getAllDoctors", getAllDoctors);  

export default doctorRoute;