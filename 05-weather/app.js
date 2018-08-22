const axios = require('axios');
const yargs = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;


let encUrl = encodeURI(yargs.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    .then(response => {
        // console.log(JSON.stringify(response.data, undefined, 2));

        let data = response.data.results[0];
        console.log(`Formatted Address: ${data.formatted_address}`);
        console.log(`Lat: ${data.geometry.location.lat}`);
        console.log(`Lng: ${data.geometry.location.lng}`);


    })
    .catch(err => console.log("Error en la peticion", err));
