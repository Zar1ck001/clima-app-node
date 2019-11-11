const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        let respLugar = await lugar.getLugarLatLng(direccion);
        let respClima = await clima.getClima(respLugar.lat, respLugar.lng);
        return `El clima de ${respLugar.direccion} es de ${respClima}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${respLugar.direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);