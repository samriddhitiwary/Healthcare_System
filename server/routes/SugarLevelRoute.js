import express from "express";
import { getValueforSugarLevel, getAll_SugarLevel_RecordsbyId } from "../controllers/SugarLevelController.js";

const getValueforSugarLevelRouter = express.Router();

getValueforSugarLevelRouter.post("/getValueforSugarLevel",getValueforSugarLevel);
getValueforSugarLevelRouter.get("/getAll_SugarLevel_RecordsbyId/:id", getAll_SugarLevel_RecordsbyId);

export default getValueforSugarLevelRouter;