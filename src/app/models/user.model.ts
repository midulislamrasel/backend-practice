import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String  },
    subscriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subscription" }]
}, { timestamps: true, versionKey: false });

const User = mongoose.model("user", userSchema);
export default User;
