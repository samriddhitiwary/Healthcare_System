import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  schedule: [
    {
      days: {
        type: [String],  
        validate: {
          validator: function (v) {
            
            return v.every(day => /^((Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday))$/.test(day));
          },
        },
        required: true,
      },
      time: {
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
      },
    },,
  ],
  Degree: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true,
  },
  
});

export default mongoose.model("DoctorProfile", DoctorSchema);
