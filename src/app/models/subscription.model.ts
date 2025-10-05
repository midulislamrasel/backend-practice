import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
  isActive: { type: Boolean, default: true },
  totalWeeksUsed: { type: Number, default: 0 },
  deliveries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Delivery" }]
}, { timestamps: true, versionKey: false });

const Subscription = mongoose.model("subscription", subscriptionSchema);
export default Subscription;