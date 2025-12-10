const mongoose = require("mongoose")
let db_host = "mongodb://localhost:27017/dars37"
async function db() {
    try {
        await mongoose.connect(db_host)
        console.log("*Connected to db")
    }catch(err) {
        console.log("Error while connecting to db")
    }
}

module.exports = {db}