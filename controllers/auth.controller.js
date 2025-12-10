const { User } = require('../models/users.model.js')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'juda_vapshe_hechkimbilmas_otaham_maxfiy_kalit'
const LOGIN = async (req, res) => {
	const { phone, password } = req.body
	let foundUser = await User.findOne({ phone })
	if (!foundUser) return res.json({ message: 'User not found' })
	if (password !== foundUser.password)
		return res.json({ message: 'Wrong password' })
	const payload = {
		id: foundUser._id,
		phone: foundUser.phone,
		name: foundUser.name,
	}
	const token = jwt.sign(
		payload,
		SECRET_KEY,
	)
	res.json({
		message: 'Successfully logged in',
		token,
	})
}

module.exports = {
	LOGIN,
}
