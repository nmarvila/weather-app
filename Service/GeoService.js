const axios = require('axios')

class GeoService {
    getGeoInfo = async (query, type) => {
        let url = ''

        if (type == 'location') {
            url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
        } else if (type == 'zipcode') {
            url = `https://nominatim.openstreetmap.org/search?postalcode=${query}&format=json`
        }

        const result = await axios.get(url)
        const lat = Number.parseFloat(result.data[0].lat)
        const lon = Number.parseFloat(result.data[0].lon)
        return {lat, lon}
    }
}

module.exports = GeoService