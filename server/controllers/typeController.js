const ApiError = require('../error/ApiError')
const Type = require('../models/Type.model')

module.exports.create = async (req, res) => {
  const {name} = req.body
  const type = await Type.create({name})
  return res.json(type)
}

module.exports.getAll = async (req, res) => {
   const types = await Type.find()
   return res.json(types)
}