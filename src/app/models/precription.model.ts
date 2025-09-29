import mongoose from "mongoose";


const prescriptionSchema = new mongoose.Schema({
  pet: { type: mongoose.Schema.Types.ObjectId, ref: "pet", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctor", required: true },
  notes: { type: String },
  date: { type: Date, required: true },
  medications: [
    {
      name: { type: String, required: true },
      dosage: { type: String, required: true },
    },
  ],
}, { timestamps: true, versionKey: false });

const Prescription = mongoose.model("prescription", prescriptionSchema);
export default Prescription;