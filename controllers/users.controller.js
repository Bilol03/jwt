const { User } = require('../models/users.model.js')
const { options } = require('../routes/users.route.js')
const GET_USERS = async (req, res) => {

	const users = await User.find().populate("passports")
	return res.json({
		message: 'Success',
		data: users,
	})
}

const POST_USER = async(req, res) => {

    const {name, phone, age, password} = req.body
    const newUser = await User.create({
        name, phone, age, password
    })
    await newUser.save()
    return res.json({
        data: newUser
    })
}

const UPDATE_USER = async(req, res) => {
    const data = req.body
    const _id = req.user.id
    const updatedUser = await User.findByIdAndUpdate({_id}, data)
    if(!updatedUser) res.json({
        message: "User not found"
    })
    res.json({
        message: "Successfully updated",
        data: await User.findById(_id)
    })

}


const DELETE_USER = async function(req, res) {
    const id = req.params.user_id

    let data = await User.findById(id)
    if(!data) return res.json({
        message: "User does not exist or already deleted!"
    })

    let result = await User.findByIdAndDelete(id)
    return res.json({
        message: "Successfully deleted",
        data: result
    })
}
    
const GET_ME = async(req, res) => {
    const data = await User.findById(req.user._id).populate([{path: 'passports', options: {strictPopulate: false}} ,{path: "posts", options: {strictPopulate: false}}]).exec()
    return res.json({
        data
    })
}

module.exports = {
	GET_USERS,
    POST_USER,
    UPDATE_USER,
    DELETE_USER, GET_ME
}
