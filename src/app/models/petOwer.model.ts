import mongoose from "mongoose";

const petOwnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
}, { timestamps: true, versionKey: false });

const PetOwner = mongoose.model("petOwner", petOwnerSchema);
export default PetOwner;