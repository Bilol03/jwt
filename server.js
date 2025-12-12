const express = require('express')
const {db} = require('./config/db.js')
const authRoute = require('./routes/auth.routes.js')
const userRoute = require('./routes/users.route.js')
const passportRoute = require('./routes/passport.route.js')

const app = express()
app.use(express.json())
async function start() {
    await db()
    app.use('/auth', authRoute)
    app.use(userRoute)
    app.use(passportRoute)
    app.listen(3000, () => console.log("http://localhost:3000"))
}
start()