const axios = require('axios')
const GeoService = require('./GeoService')
const geoService = new GeoService()

class WeatherService {
    getWeatherInfo = async (req, res) => {
        let url = 'https://api.open-meteo.com/v1/forecast?'
        const geoPoint = await geoService.getGeoInfo(req.query.location)
        url += `latitude=${geoPoint.lat}&longitude=${geoPoint.lon}&current_weather=true`
        const result = await axios.get(url)
        return result.data.current_weather
    }
}

module.exports = WeatherService