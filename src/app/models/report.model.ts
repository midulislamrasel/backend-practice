import mongoose from "mongoose";
const reportSchema = new mongoose.Schema({
hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
month: { type: Number, required: true },
year: { type: Number, required: true },
totalBookings: { type: Number, default: 0 },
revenue: { type: Number, default: 0 },
popularRoomTypes: [{ type: String }],
}, { timestamps: true, versionKey: false });


const Report = mongoose.model("report", reportSchema);
module.exports = Report;
