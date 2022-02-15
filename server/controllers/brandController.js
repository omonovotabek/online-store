const ApiError = require('../error/ApiError')
const Brand = require('../models/Brand.model')

module.exports.create = async (req, res) => {
  const {name} = req.body
  const brand = await Brand.create({name})
  return res.json(brand)
}

module.exports.getAll = async (req, res) => {
   const brands = await Brand.find()
   return res.json(brands)
}