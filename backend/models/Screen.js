const mongoose = require("mongoose");
const Theatre = require("./Theatre");

const screenSchema = new mongoose.Schema(
    {
        screen_no:{
            type: Number,
            required: true
        },
        theatreId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Theatre",
            required: true
        },
        totalSeats:{
            type: Number,
            required: true
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("Screen", screenSchema );