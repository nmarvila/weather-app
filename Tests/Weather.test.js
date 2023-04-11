const request = require('supertest')
const url = 'https://localhost:3000'

test('tests /weather endpoint to obtain weather information from a location\'s name', async() => {
    const response = await request(url).get('/weather?location="Rio de Janeiro"')
    const responseValue = JSON.parse(response.text)
    expect(response).not.toEqual(undefined)
    expect(response.statusCode).toEqual(200)
    expect(responseValue).not.toEqual(undefined)
    expect(responseValue.temperature).not.toEqual(undefined)
})