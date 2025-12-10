const jwt = require('jsonwebtoken')
const { User } = require('../models/users.model')
const checkToken = async (req, res, next) => {
	let token = req.headers['authorization']
	if (!token)
		return res.json({
			message: 'Unauthorized',
			statusCode: 401,
		})
	const SECRET_KEY = 'juda_vapshe_hechkimbilmas_otaham_maxfiy_kalit'

	token = token.split(' ')[1]
	const data = jwt.verify(token, SECRET_KEY)

	const isExist = await User.findOne({ phone: data.phone })
	if (!isExist)
		return res.json({
			message: 'User does not exist',
		})

	next()
}

module.exports = { checkToken }
