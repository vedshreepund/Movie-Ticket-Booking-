const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        duration: {
            type: Number,
            required: true
        },

        genre: {
            type: String
        },

        language: {
            type: String
        },

        releaseDate: {
            type: Date
        },

        poster: {
            type: String
        },

        rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Movie", movieSchema);
