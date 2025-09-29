import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
number: { type: String, required: true },
type: { type: String, enum: ['single', 'double', 'twin', 'suite', 'family', 'deluxe'], default: 'single' },
title: String,
description: String,
capacity: { type: Number, default: 1 },
pricePerNight: { type: Number, required: true, min: 0 },
refundable: { type: Boolean, default: true },
amenities: [String],
images: [String],
isAvailable: { type: Boolean, default: true },
meta: {
floor: Number,
areaSqM: Number
}}, 
{ timestamps: true, versionKey: false });


const Room = mongoose.model("room", roomSchema);
module.exports = Room;
