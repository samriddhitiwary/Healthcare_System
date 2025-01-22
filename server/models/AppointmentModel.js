import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DoctorProfile',  
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,   
        default: 'pending',  
        enum: ['pending', 'confirmed', 'cancelled'],  
    },
   
    
});

export default mongoose.model("Appointment", AppointmentSchema);
