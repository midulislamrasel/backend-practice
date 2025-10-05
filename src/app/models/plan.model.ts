import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  name: { type: String, enum: ["Veg", "Non-Veg", "Mix"], required: true },
  durationWeeks: { type: Number, default: 1 }, 
  pricePerWeek: Number,
  meals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meal" }]
}, { timestamps: true, versionKey: false });

const Plan = mongoose.model("plan", planSchema);
export default Plan;