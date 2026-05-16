const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
    {
        screenId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Screen",
            required: true
        },
        seatNo:{
            type: String,
            required: true
        },
        seatType:{
            type: String,
            required: true
        },
        isBooked:{
            type: Boolean,
            required: true
        },
        booking:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking"
        }

    },
    { timestamps: true }
);
module.exports = mongoose.model("Seat", seatSchema );