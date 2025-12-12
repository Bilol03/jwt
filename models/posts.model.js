const mongoose  = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

const Post = mongoose.model("posts", PostSchema)

module.exports = {
    Post
}