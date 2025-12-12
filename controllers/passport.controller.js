const { Passport } = require("../models/passport.model")
const { User } = require("../models/users.model")

const CREATE_PASSPORT = async(req, res) => {
    const {type, seriya} = req.body
    if(!(type && seriya)) return res.json({
        message: "type and seriya required"
    })
    const newPassport = await Passport.create({
        type, 
        seriya,
        user: req.user._id
    })
    await User.findByIdAndUpdate({_id: req.user._id}, {passport: newPassport._id})

    res.json({
        message: "Passport created",
        data: newPassport
    })
}

module.exports = {
    CREATE_PASSPORT
}