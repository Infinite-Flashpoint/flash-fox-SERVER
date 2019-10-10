const mongoose = require("mongoose")
const Schema = mongoose.Schema

const file = new Schema ({
    link: String
})

const File = mongoose.model("Articles", file)
module.exports = File