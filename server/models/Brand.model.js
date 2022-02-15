const {Schema, model} = require('mongoose')

const brandSchema = new Schema({
    name:{type: String, required:true},
    updatedAt:{type: Date, default: Date.now},
    createdAt: {type:Date, default: Date.now}
})

module.exports = model('Brand', brandSchema)