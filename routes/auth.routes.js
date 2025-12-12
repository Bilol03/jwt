const express = require("express")
const route = express.Router()
const {LOGIN, REGISTER } = require("../controllers/auth.controller.js")

route.post("/login", LOGIN)
route.post("/register", REGISTER)
module.exports = route