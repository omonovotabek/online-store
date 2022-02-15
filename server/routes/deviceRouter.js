const { Router } = require('express')
const { getAll, create, getOne } = require('../controllers/deviceController')
const router = Router()

router.get('/device', getAll)
router.post('/device', create)
router.get('/device', getOne)

module.exports = router