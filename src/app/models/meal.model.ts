import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Veg", "Non-Veg", "Mix"], required: true },
  calories: Number,
  description: String,
  repeatCount: { type: Number, default: 0 } 
},{ timestamps: true, versionKey: false });

export default mongoose.model("Meal", mealSchema);