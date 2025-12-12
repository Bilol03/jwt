
const mongoose = require("mongoose")
const { User } = require("./users.model")

const PassportSchema = new mongoose.Schema({
    type: String,
    seriya: {type: String, required: true, unique: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        unique: true
    }
})

const Passport = mongoose.model('passports', PassportSchema)

module.exports = {
    Passport
}