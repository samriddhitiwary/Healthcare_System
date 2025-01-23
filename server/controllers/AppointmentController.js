import { convertDate } from "../middleware/dateUtil.js";
import Appointment from "../models/AppointmentModel.js";


export const scheduleApointment = async(req, res)=>{
    try {

        const AppointmentData = new Appointment(req.body);

        if(!AppointmentData){
            return res.status(404).json({msg: "Appointment data not found"});
        }

        await AppointmentData.save();
        res.status(200).json({msg: "Appointment schedulled successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
    
}

export const updateAppointment = async (req, res) => {
    try {
        const id = req.params.id;

        const AppointmentExist = await Appointment.findById(id);
        if (!AppointmentExist) {
            return res.status(404).json({ msg: "Appointment not found" });
        }   

       
        const { date } = req.body;

        if (!date) {
            return res.status(400).json({ msg: "Appointment date is required" });
        }

        const updatedData = await Appointment.findByIdAndUpdate(
            id,
            { date },
            { new: true } 
        );

        res.status(200).json({ msg: "Appointment date updated successfully", updatedData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }  
  
   

};



export const cancelAppointment = async (req, res) => {
    try {
        const id = req.params.id;

        const AppointmentExist = await Appointment.findById(id);
        if (!AppointmentExist) {
            return res.status(404).json({ msg: "Appointment not found" });
        }

        const updatedData = await Appointment.findByIdAndUpdate(
            id,
            {  status: 'cancelled' } , 
            { new: true } 
        );

        res.status(200).json({ msg: "Appointment canceled successfully", updatedData });
    } catch (error) {
        console.log('PANKAJ ', error)
        res.status(500).json({ error: error.message });
    }
};



export const getAllAppointmentsOfOnePatient = async (req, res) => {
    try {
        const patientId = req.params.id;

        const appointments = await Appointment.find({ patientId })
            .populate({
                path: 'doctorId',
                select: 'fname lname photo', 
            });

        if (appointments.length === 0) {
            return res.status(404).json({ msg: "No appointments found for this patient" });
        }

        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getTomorrrowAppointment = async () => {
    try {
        let start_date = new Date();
        start_date =  new Date(start_date.setDate(start_date.getDate() + 1));
        start_date = convertDate(start_date.toISOString());
        console.log(start_date);

        let end_date = new Date();
        end_date =  new Date(end_date.setDate(end_date.getDate() + 2));
        end_date = convertDate(end_date.toISOString());
        console.log(end_date);

        const appointments = await Appointment.find({
            date: {
                $gt: new Date(start_date),
                $lt: new Date(end_date)

            //   $gt: new Date("2025-01-16T00:00:00.000Z"),
            //   $lt: new Date("2025-01-17T00:00:00.000Z")
            }
          })

          return appointments;
        
    } catch (error) {
        console.log(error);
    }
}