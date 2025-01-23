import express from "express";
import { createMeal, getAllMealsOfOnePatientByDate, deleteMeal, updateMeal  } from "../controllers/NutrientsController.js";

const meals = express.Router();


meals.post("/meal-data", createMeal);
meals.get("/get-all-meals/:patientId/:date", getAllMealsOfOnePatientByDate);
meals.delete("/delete-meal/:id", deleteMeal);
meals.put("/update-meal/:id", updateMeal);
export default meals;