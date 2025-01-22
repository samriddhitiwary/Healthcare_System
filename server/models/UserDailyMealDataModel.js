import mongoose from "mongoose";

const MealItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,  
  },
  quantity: {
    type: Number,
    required: true,  
  },
});

const UserDailyMealSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  mealtype: {
    type: String,
    required: true,
    enum: ["breakfast", "lunch", "snack", "dinner"],
  },
  meals: [MealItemSchema],
  calorie: Number,
});

export default mongoose.model("UserDailyMealData", UserDailyMealSchema);
