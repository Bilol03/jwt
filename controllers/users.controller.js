const { User } = require('../models/users.model.js')
const GET_USERS = async (req, res) => {

	const users = await User.find()
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

module.exports = {
	GET_USERS,
    POST_USER
}
