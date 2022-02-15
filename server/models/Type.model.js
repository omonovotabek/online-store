const {Schema, model} = require('mongoose')

const typeSchema = new Schema({
    name:{type: String, required:true},
    updatedAt:{type: Date, default: Date.now},
    createdAt: {type:Date, default: Date.now}
})

module.exports = model('Type', typeSchema)