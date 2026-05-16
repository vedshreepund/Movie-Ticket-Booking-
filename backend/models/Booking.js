const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        showId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Show",
            required: true
        },
        totalAmount:{
            type: Number,
            required: true
        },
        bookingStatus:{
            type: String,
            required: true
        },
        paymentStatus:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Payment",
            required: true
        },
        bookedSeats:[{
            type: String,
            required: true
        }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);