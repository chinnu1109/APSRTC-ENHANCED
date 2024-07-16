const mongoose = require('mongoose')

const feedbackschema = new mongoose.Schema({
    feedback:String,
    rating :String
})

const itemModel = mongoose.model("Item",feedbackschema)
module.exports = itemModel