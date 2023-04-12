const WeatherCode = require('./WeatherCode')

class Weather {
    constructor(weatherInfo) {
        this.temperature = `${weatherInfo.temperature} ºC`
        this.windspeed = `${weatherInfo.windspeed} km/h`
        this.winddirection = `${weatherInfo.winddirection} º`
        this.weatherDesc = WeatherCode.descriptions[weatherInfo.weathercode]
        this.daylight = weatherInfo.is_day == 1 ? 'Has daylight' : 'No daylight'
        this.time = new Date(Date.now()).toLocaleString('en-GB')
    }
}

module.exports = Weather