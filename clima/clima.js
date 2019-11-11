const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=d92307597e89197e88ec767e2331bf3f&units=metric`);

    if (!resp) {
        throw new Error(`No se encontraron resultados del clima`);
    } else {
        return resp.data.main.temp;
    }

}

module.exports = {
    getClima
}