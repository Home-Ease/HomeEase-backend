const propertyModel = require('../models/propertyModel')

const getProperties = async(req, res) => {
    const {searchLocation, minValue, maxValue} = req.query
    let isCity = true;
    if(!isNaN(searchLocation)) isCity = false;
    const properties = await propertyModel.getPropertiesFromDB(isCity,searchLocation, minValue, maxValue)
    res.status(200).json(properties)
}

const getSingleProperty = async(req,res) =>{
    const {id} = req.params
    const property =  await propertyModel.getPropertyFromDB(id)
    res.status(200).json(property)
}

module.exports ={
    getProperties,
    getSingleProperty
}