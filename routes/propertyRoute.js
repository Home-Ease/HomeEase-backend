const express =require('express')
const router = express.Router()
const propertyController = require('../controllers/propertyController')

router.get('/search/',propertyController.getProperties )

router.all('*', (req,res)=>{
    res.send('This path does not exist')
});

module.exports = router