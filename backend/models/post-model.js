const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    text: {type: String, required: true},
    time: {type: Number, required: true}
})

export default mongoose.model("Post", postSchema);