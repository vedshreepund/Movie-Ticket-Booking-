const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        createdBy:{
            
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
                required: true
        },
        location:{
            type: String,
            required: true
        },
        rating:{
            type: Number,
            default: 0
        }
    },
    { timestamps : true }
);
module.exports = mongoose.model("Theatre", theatreSchema );