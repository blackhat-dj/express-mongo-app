const controllers = require('../controller/index.js')
const router = require('express').Router()

router.get('/query', controllers.getEmployee)
router.post('/create', controllers.createEmployee)

module.exports = router