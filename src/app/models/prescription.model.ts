import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  medications: [{
    medicine: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine", required: true },
  }]
}, { timestamps: true, versionKey: false });


export default mongoose.model("Prescription", prescriptionSchema);