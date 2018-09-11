const axios = require('axios');

const getPlace = async (address) => {

    let encUrl = encodeURI(address);
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
        
    if(response.data.status == 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la direccion ${address}`);
    }

    let location = response.data.results[0];
    let cors= location.geometry.location;
    
    return {
        address: location.formatted_address,
        lat: cors.lat,
        lng: cors.lng
    };
    
};

module.exports = {
    getPlace,
};
