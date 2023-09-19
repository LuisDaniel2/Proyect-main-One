import mongoose from "mongoose";

const tecnicoSchema = new mongoose.Schema({
    client: {
        type: String,
        default: 'Tecnico',
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Tecnico', tecnicoSchema);