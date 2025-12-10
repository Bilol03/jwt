const express = require("express")
const route = express.Router()
const {GET_USERS, POST_USER } = require("../controllers/users.controller.js")
const {checkToken} = require("../middlewares/auth.middleware.js")

route.get("/users", checkToken, GET_USERS)
route.post("/users", checkToken, POST_USER)
module.exports = route