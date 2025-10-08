import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: "plan", required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
  isActive: { type: Boolean, default: true },
  totalWeeksUsed: { type: Number, default: 0 },
  deliveries: [{ type: mongoose.Schema.Types.ObjectId, ref: "delivery" }]
}, { timestamps: true, versionKey: false });

const Subscription = mongoose.model("subscription", subscriptionSchema);
export default Subscription;