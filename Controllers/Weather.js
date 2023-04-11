const WeatherService = require('../Service/Weather')
const weatherService = new WeatherService()

module.exports.callGetWeatherInfo = async (req, res) => {
    const result = await weatherService.getWeatherInfo(req, res)

    if (result == undefined) {
        res.status(404).send("")
    } else {
        res.status(200).send(result)
    }
    req.connection.destroy()
}