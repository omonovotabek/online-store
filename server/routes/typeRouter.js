const { Router } = require('express')
const { getAll, create } = require('../controllers/typeController')
const router = Router()

router.get('/type', getAll)
router.post('/type', create)

module.exports = router