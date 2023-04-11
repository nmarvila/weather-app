const express = require('express')
const router = express.Router()
const weatherController = require('../Controllers/Weather')

router.get('/', weatherController.callGetWeatherInfo)

module.exports = router