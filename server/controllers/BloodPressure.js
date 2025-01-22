import BloodPressure from '../models/BloodPressure.js';
import { convertDate } from '../middleware/dateUtil.js';

export const getValueforBP = async(req, res)=>{
    try {
        req.body.date = convertDate(req.body.date);
        const bpData = new BloodPressure(req.body);
        await BloodPressure.deleteOne({'patientId' : bpData.patientId, 'date': bpData.date })

        if(!bpData){
            return res.status(404).json({msg: "Blood Pressure data not found"});
        }
       

        await bpData.save();
        res.status(200).json({msg: "Blood Pressure value added successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getAllBPRecordsbyId = async (req, res) => {
    try {
        const id = req.params.id; 
        const AllBPRecordList = await BloodPressure.find({ patientId: id }).sort({ date: -1 }).limit(5);
        
        res.status(200).json(AllBPRecordList); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};