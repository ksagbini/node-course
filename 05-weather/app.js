const place = require('./place/place');
const weather = require('./weather/weather');

const yargs = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;


let placeInfo = async () => {
    try{
        let info = await place.getPlace(yargs.direccion);
        let wather = await weather.getWeather(info.lat, info.lng);
        return `El clima en ${info.address} es de ${wather}°c`;
    } catch(e){
        return `Sin resultado de clima para ${yargs.direccion}`
    }
};

placeInfo()
    .then(resp => console.log(resp))
    .catch(err => console.error(err));