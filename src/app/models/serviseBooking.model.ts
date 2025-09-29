import mongoose from "mongoose";

const serviceBookingSchema = new mongoose.Schema({
    petOwner: { type: mongoose.Schema.Types.ObjectId, ref: "petOwner", required: true },
    pet: { type: mongoose.Schema.Types.ObjectId, ref: "pet", required: true },
    serviceType: { type: String, required: true },
    providerName: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    notes: { type: String },

}, { timestamps: true, versionKey: false });

const ServiceBooking = mongoose.model("ServiceBooking", serviceBookingSchema);
export default ServiceBooking;