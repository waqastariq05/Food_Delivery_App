const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("reservation", reservationSchema);
