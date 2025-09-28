import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name: { type: String, required: true, trim: true },
email: { type: String, required: true, unique: true, lowercase: true, trim: true },
passwordHash: { type: String, required: true },
phone: { type: String },
role: { type: String, enum: ['guest', 'admin', 'staff', 'manager'], default: 'guest' },
profile: {
address: String,
city: String,
country: String,
},
}, { timestamps: true, versionKey: false });



const User = mongoose.model("user", userSchema);
module.exports = User;