const axios = require('axios')
const GeoService = require('./GeoService')
const Weather = require('../Models/Weather')

const geoService = new GeoService()

class WeatherService {
    getWeatherInfo = async (req, res) => {
        let url = 'https://api.open-meteo.com/v1/forecast?'
        let geoPoint = undefined

        if (req.query.location != undefined) {
            geoPoint = await geoService.getGeoInfo(req.query.location, 'location')
        } else if (req.query.zipcode != undefined) {
            geoPoint = await geoService.getGeoInfo(req.query.zipcode, 'zipcode')
        }

        url += `latitude=${geoPoint.lat}&longitude=${geoPoint.lon}&current_weather=true`
        const result = await axios.get(url)
        return new Weather(result.data.current_weather)
    }
}

module.exports = WeatherService