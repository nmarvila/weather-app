const request = require('supertest')
const url = 'http://localhost:3000'

test('tests /weather endpoint to obtain weather information from a location\'s name', async() => {
    const response = await request(url).get('/weather?location="Rio de Janeiro"')
    const responseValue = JSON.parse(response.text)
    expect(response).not.toEqual(undefined)
    expect(response.statusCode).toEqual(200)
    expect(responseValue).not.toEqual(undefined)
    expect(responseValue.temperature).not.toEqual(undefined)
}, 10000)


test('tests /weather endpoint to obtain weather information from a zip code', async() => {
    const response = await request(url).get('/weather?zipcode="22031000"')
    const responseValue = JSON.parse(response.text)
    expect(response).not.toEqual(undefined)
    expect(response.statusCode).toEqual(200)
    expect(responseValue).not.toEqual(undefined)
    expect(responseValue.temperature).not.toEqual(undefined)
}, 10000)