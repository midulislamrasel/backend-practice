
import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String },
    password: { type: String, required: true },
    // role: { type: String, enum: ['admin', 'user'], default: 'user' }
}, { timestamps: true, versionKey: false });


export default mongoose.model("User", userSchema);
