const mongoose = require('mongoose')
const { Passport } = require('./passport.model')

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number,
	phone: Number,
	password: String,
	passport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "passports"
	}
})

const User = mongoose.model("users", UserSchema)

module.exports = { User }
