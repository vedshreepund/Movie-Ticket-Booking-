const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
    {
        movieId:{
            type : mongoose.Schema.Types.ObjectId,
            ref: "Movie",
            required: true
        },

        theatreId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Theatre",
            required: true
        },

        screenId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Screen",
            required: true
        },
        startTime:{
            type: Date,
            required: true
        },
        endTime:{
            type: Date,
            required: true
        },
        totalRows:{
            type:Number,
            required:true
        },

        seatsPerRow:{
            type:Number,
            required:true
        },

        seats:{
            type:[[Boolean]],
            required:true
        }
        
    },
    { timestamps: true }
);
module.exports = mongoose.model("Show", showSchema );