const express = require('express')

const weatherRoute = require('./Routes/Weather')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Simple Weather API')
})

app.use('/weather', weatherRoute)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})