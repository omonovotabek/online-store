const ApiError = require('../error/ApiError')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const keys = require('../keys')
// const User = require('../models/user.model')


module.exports.registration = async (req, res) => {
    // const candidate = await User.findOne({ login: req.body.login })

    // if (candidate) {
    //     const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)
    //     if (isPasswordCorrect) {
    //         const token = jwt.sign({
    //             login: candidate.login,
    //             userId: candidate._id
    //         }, keys.JWT, { expiresIn: 60 * 60 })
    //         res.json({ token })
    //     } else {
    //         res.status(401).json({ message: 'Parol notogri' })
    //     }

    // } else {
    //     res.status(404).json({ message: 'Bunday foydalanuvchi mavjud emas' })
    // }
}


module.exports.login = async (req, res) => {
    // const candidate = await User.findOne({ login: req.body.login })

    // if (candidate) {
    //     const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)
    //     if (isPasswordCorrect) {
    //         const token = jwt.sign({
    //             login: candidate.login,
    //             userId: candidate._id
    //         }, keys.JWT, { expiresIn: 60 * 60 })
    //         res.json({ token })
    //     } else {
    //         res.status(401).json({ message: 'Parol notogri' })
    //     }

    // } else {
    //     res.status(404).json({ message: 'Bunday foydalanuvchi mavjud emas' })
    // }
}

module.exports.check = async (req, res, next) => {
    const {id} = req.query
    if(!id) {
       return next(ApiError.badRequest('ne zadan id'))
    }
   res.json(id)
}