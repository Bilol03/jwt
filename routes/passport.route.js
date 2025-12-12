const express = require('express')
const { CREATE_PASSPORT } = require('../controllers/passport.controller.js')
const { checkToken } = require('../middlewares/auth.middleware.js')
const route = express.Router()

route.post('/passport', checkToken, CREATE_PASSPORT)
module.exports = route
