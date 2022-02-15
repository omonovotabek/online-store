const Device = require('../models/Device.model')
const uuid  = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

module.exports.create = async (req, res, next) => {
    try {
        const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '../', 'static', fileName))
     
        const device = await Device.create({name, price, brandId, typeId, img: fileName})
        return res.json(device)

    } catch (e) {
        next(ApiError.badRequest(e.message))
    }

}

module.exports.getAll = async (req, res) => {
    let {brandId, typeId, limit, page} = req.query
    page = page || 1
    limit = limit || 9
    let device;
    if(!brandId && !typeId) {
        device = await Device.find()
        .skip(page*limit -limit)
        .limit(page)
    }
    if(!brandId && typeId) {
        device = await Device.find({typeId})
    }
    if(brandId && !typeId) {
        device = await Device.find({brandId})
    }
    if(brandId && typeId) {
        device = await Device.find({typeId, brandId})
    }
    return res.json(device)
}
module.exports.getOne = async (req, res) => {

}