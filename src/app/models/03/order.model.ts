import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{
    medicine: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine", required: true },
    quantity: { type: Number, required: true }
  }],
  status: { type: String, enum: ["pending", "completed", "canceled"], default: "pending" }
}, { timestamps: true, versionKey: false });


export default mongoose.model("Order", orderSchema);