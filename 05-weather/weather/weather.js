const axios = require('axios');
const apiWeatherKey = '6506209ac98a442d149e40c81722b78e';

let getWeather = async (lat, lng) => {    
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiWeatherKey}&units=metric`);
    return response.data.main.temp;
}

module.exports = {
    getWeather
};