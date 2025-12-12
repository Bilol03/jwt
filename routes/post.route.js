const express = require("express")
const route = express.Router()
const {CREATE_POST} = require("../controllers/post.controller")
const { checkToken } = require("../middlewares/auth.middleware")

route.post("/post", checkToken, CREATE_POST)

module.exports = route