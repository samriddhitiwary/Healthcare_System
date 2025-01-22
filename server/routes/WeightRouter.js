import express from "express";
import { getValueforWeight, getAll_WeightLevel_RecordsbyId } from "../controllers/WeightController.js";

const getValueforWeightRouter = express.Router();

getValueforWeightRouter.post("/getValueforWeight",getValueforWeight);
getValueforWeightRouter.get("/getAll_WeightLevel_RecordsbyId/:id", getAll_WeightLevel_RecordsbyId);

export default getValueforWeightRouter;