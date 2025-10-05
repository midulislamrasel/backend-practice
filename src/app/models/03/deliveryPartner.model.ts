import mongoose from "mongoose";

const deliveryPartnerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }]
}, { timestamps: true });

export default mongoose.model("DeliveryPartner", deliveryPartnerSchema);