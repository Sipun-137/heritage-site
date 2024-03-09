import mongoose from "mongoose"
const StateModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    },
}, { timestamps: true })

const State = mongoose.models.States || mongoose.model("States", StateModelSchema)
export default State;