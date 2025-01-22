import express from "express";
import { create, deleteUser, getOne, getUserByEmailId, update } from "../controllers/ProfileController.js";

const profileRoute = express.Router();  

// Define routes
profileRoute.post("/create", create);
profileRoute.get("/getone/:id", getOne);
profileRoute.put("/update/:id", update);
profileRoute.delete("/delete/:id", deleteUser);
profileRoute.get("/getuserbyemail", getUserByEmailId);

export default profileRoute;
