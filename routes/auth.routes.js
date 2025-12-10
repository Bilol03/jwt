const express = require("express")
const route = express.Router()
const {LOGIN } = require("../controllers/auth.controller.js")

route.post("/login", LOGIN)
module.exports = route