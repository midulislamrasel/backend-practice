import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String },
    company: { type: String, required: true }
}, { timestamps: true, versionKey: false });


export default mongoose.model("Supplier", supplierSchema);