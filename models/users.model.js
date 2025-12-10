const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number,
	phone: Number,
	password: String,
})

const User = mongoose.model("users", UserSchema)

module.exports = { User }
