const { Router } = require('express')
const { getAll, create } = require('../controllers/brandController')
const router = Router()

router.get('/brand', getAll)
router.post('/brand', create)

module.exports = router 