const { Post } = require("../models/posts.model")
const { User } = require("../models/users.model")

const CREATE_POST = async(req, res) => {
    const {title, body} = req.body
    const newPost = await Post.create({
        title,
        body,
        user: req.user._id
    })
    await User.findByIdAndUpdate(req.user._id, {
        $push: {
            posts: newPost._id
        }
    })
    return res.json(newPost)
}

module.exports = {
    CREATE_POST
}