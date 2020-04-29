const request = require('postman-request')

// Weather:
// Lat/Long -> Weather
const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b37717657f44669e35cf2c7733ef01b1&query=' + latitude + ',' + longtitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast