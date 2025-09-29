import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  petOwner: { type: mongoose.Schema.Types.ObjectId, ref: "petOwner", required: true },
  pet: { type: mongoose.Schema.Types.ObjectId, ref: "pet", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctor", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  notes: { type: String },
}, { timestamps: true, versionKey: false });

const Appointment = mongoose.model("appointment", appointmentSchema);
export default Appointment;