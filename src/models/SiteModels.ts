import mongoose from "mongoose"


const SiteModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }, imgurl: Array,
    description: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Site = mongoose.models.Sites || mongoose.model("Sites", SiteModelSchema)
export default Site;