import mongoose from "mongoose";

const BloodPressureSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    bloodPressure: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
       
});

export default mongoose.model("BloodPressure", BloodPressureSchema);
