import express from 'express';
import { getValueforBP,getAllBPRecordsbyId } from '../controllers/BloodPressure.js';
 
const getValueforBPRouter = express.Router();


getValueforBPRouter.post("/getValueforBP", getValueforBP);


getValueforBPRouter.get("/getAllBPRecordsbyId/:id",getAllBPRecordsbyId);

export default getValueforBPRouter;
