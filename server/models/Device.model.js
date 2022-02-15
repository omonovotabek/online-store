const {Schema, model} = require('mongoose')

const deviceSchema = new Schema ({
    name: {type: String, required: true},
    price: {type: Number},
    info:{type: String, default:"New"},
    brandId:{type: String, default:"New"},
    typeId:{type: String, default:"New"},
    reting: {type: Number, default: 0},
    img: {type: String},
    // typex:{
    //     type: new Schema({
    //         name:Number,
    //         updatedAt:{type: Date, default: Date.now},
    //         createdAt: {type:Date, default: Date.now}
    //     })
    // }
})

module.exports = model('Device', deviceSchema)