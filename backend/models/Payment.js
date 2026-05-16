const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        status:{
            type: String,
            required: true
        },
        bookingId:{
            type : mongoose.Schema.Types.ObjectId,
            ref: "Booking",
            required: true
        },
        method:{
            type: String,
            required: true
        },
        Amount:{
            type: Number,
            required: true
        },
    },
    { timestamps : true }
);

module.exports = mongoose.model("Payment", paymentSchema);