import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
checkIn: { type: Date, required: true },
checkOut: { type: Date, required: true },
guests: { type: Number, default: 1 },
totalPrice: { type: Number, required: true, min: 0 },
currency: { type: String, default: 'USD' },
status: { type: String, enum: ['created', 'confirmed', 'checked_in', 'checked_out', 'cancelled', 'no_show'], default: 'created' },
paymentStatus: { type: String, enum: ['pending', 'paid', 'refunded', 'failed'], default: 'pending' },
notes: String,
extras: [ { name: String, price: Number } ]
}, { timestamps: true, versionKey: false });


const Booking = mongoose.model("booking", bookingSchema);
module.exports = Booking;
