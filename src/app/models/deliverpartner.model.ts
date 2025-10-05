import mongoose from "mongoose";

const deliveryPartnerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  deliveries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Delivery" }]
},{ timestamps: true, versionKey: false });

const DeliveryPartner = mongoose.model("DeliveryPartner", deliveryPartnerSchema);
export default DeliveryPartner;
