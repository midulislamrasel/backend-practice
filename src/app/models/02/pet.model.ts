import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "petOwner", required: true }
}, { timestamps: true, versionKey: false });

const Pet = mongoose.model("pet", petSchema);
export default Pet;