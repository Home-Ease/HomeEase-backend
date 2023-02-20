const pool = require('../dbConfig');

function getPropertiesFromDB(isCity, searchLocation, minValue, maxValue){
    if(isCity){
        return pool.query('SELECT * FROM properties WHERE city = $1 AND price >= $2 AND price <= $3', [searchLocation,minValue,maxValue])
        .then(results => results.rows);
    }
    else{
        return pool.query('SELECT * FROM properties WHERE zip = $1 AND price >= $2 AND price <= $3', [searchLocation,minValue,maxValue])
        .then(results => results.rows);
    }
}


module.exports = {
    getPropertiesFromDB
}

