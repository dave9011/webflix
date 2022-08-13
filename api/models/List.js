const mongoose = require("mongoose");

const ListSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: Number,
        },
        genre: {
            type: String,
        },
        content: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('List', ListSchema);