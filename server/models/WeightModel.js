import mongoose from "mongoose";

const WeightSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
       
});

export default mongoose.model("Weight", WeightSchema);
