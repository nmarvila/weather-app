const axios = require('axios')

class GeoService {
    getGeoInfo = async (location) => {
        const url = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
        const result = await axios.get(url)
        const lat = Number.parseFloat(result.data[0].lat)
        const lon = Number.parseFloat(result.data[0].lon)
        return {lat, lon}
    }
}

module.exports = GeoService