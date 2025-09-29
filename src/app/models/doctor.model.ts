import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
}, { timestamps: true, versionKey: false });

const Doctor = mongoose.model("doctor", doctorSchema);
export default Doctor;

