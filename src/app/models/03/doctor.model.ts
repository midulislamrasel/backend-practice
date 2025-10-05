import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    hospital: { type: String, required: true }
}, { timestamps: true, versionKey: false });


export default mongoose.model("Doctor", doctorSchema);