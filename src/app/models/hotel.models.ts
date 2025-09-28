import mongoose, { Schema } from 'mongoose';

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, index: true },
    description: { type: String },
    address: {
    street: String,
    city: String,
    country: String,
    postcode: String,
    location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0,0] },
    }
    },
    starRating: { type: Number, min: 1, max: 5 },
    amenities: [String],
    images: [String],
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    isActive: { type: Boolean, default: true },
},

{ timestamps: true, versionKey: false }

);


const Hotel = mongoose.model("hotel", hotelSchema);
module.exports = Hotel;
