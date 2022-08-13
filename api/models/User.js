const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema(
    {
        username: {
            type: string,
            required: true,
            unique: true,
        },
        email: {
            type: string,
            required: true,
            unique: true,
        },
        passpword: {
            type: string,
            required: true,
        },
        profilePic: {
            type: string,
            default: "",
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', UserSchema);