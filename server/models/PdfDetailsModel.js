import mongoose from "mongoose";

const PdfDetailsSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    hospitalName: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required:true,
    },
    pdf: {
        type:  mongoose.Schema.Types.Mixed, 
        required: true,
    },
});

export default mongoose.model("PdfDetail", PdfDetailsSchema);
