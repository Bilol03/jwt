const express = require("express")
const route = express.Router()
const {GET_USERS, POST_USER, UPDATE_USER} = require("../controllers/users.controller.js")
const {checkToken} = require("../middlewares/auth.middleware.js")

route.get("/users", checkToken, GET_USERS)
route.post("/users", checkToken, POST_USER)
route.put("/users", checkToken, UPDATE_USER)
module.exports = route