import mongoose from "mongoose";
const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    expiryDate: { type: Date, required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier", required: true }
}, { timestamps: true, versionKey: false });


export default mongoose.model("Medicine", medicineSchema);
