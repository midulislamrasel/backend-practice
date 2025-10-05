import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
  subscription: { type: mongoose.Schema.Types.ObjectId, ref: "Subscription", required: true },
  deliveryPartner: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryPartner" },
  meal: { type: mongoose.Schema.Types.ObjectId, ref: "Meal", required: true },
  deliveryDate: { type: Date, required: true },
  status: { 
    type: String, 
    enum: ["Pending", "Delivered", "Failed"], 
    default: "Pending" 
  }
}, { timestamps: true, versionKey: false });

export default mongoose.model("Delivery", deliverySchema);