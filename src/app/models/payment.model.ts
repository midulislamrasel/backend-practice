import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
amount: { type: Number, required: true, min: 0 },
currency: { type: String, default: 'USD' },
method: { type: String, enum: ['card', 'wallet', 'bank_transfer', 'cash', 'third_party'], default: 'card' },
provider: { type: String },
transactionId: { type: String, index: true },
status: { type: String, enum: ['initiated', 'succeeded', 'failed', 'refunded'], default: 'initiated' },
processedAt: Date,
rawResponse: mongoose.Schema.Types.Mixed
},{ timestamps: true, versionKey: false });


const Payment = mongoose.model("payment", paymentSchema);
module.exports = Payment;
