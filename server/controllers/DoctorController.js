import DoctorProfile from "../models/DoctorModel.js";

export const createDoctorProfile = async(req, res)=>{
    try {

        const userData = new DoctorProfile(req.body);

        if(!userData){
            return res.status(404).json({msg: "Doctor data not found"});
        }

        await userData.save();
        res.status(200).json({msg: "Doctor Profile created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


    export const getAllDoctors = async(req, res) =>{
        
        try {

            
            const AllDoctorList = await DoctorProfile.find();
            
            res.status(200).json(AllDoctorList);
            
        } catch (error) {
            res.status(500).json({error: error});
        }
    }  