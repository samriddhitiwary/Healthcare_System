import mongoose from "mongoose";

const SugarLevelSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    sugarlevel: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
       
});

export default mongoose.model("SugarLevel", SugarLevelSchema);
