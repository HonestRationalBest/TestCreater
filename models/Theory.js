const { Schema, model } = require('mongoose')


const schema = new Schema({
    ownerId: { type: String, required: true},
    name: {type: String, required: true }, 
    link: { type: String, required: true },
    sectionId: { type: Schema.Types.ObjectId, required: true },
})

module.exports = model("Theory", schema)