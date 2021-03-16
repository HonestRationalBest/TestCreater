const { Schema, model } = require('mongoose')


const schema = new Schema({
    ownerId: { type: String, required: true},
    name: {type: String, required: true }, 
})

module.exports = model("Section", schema)