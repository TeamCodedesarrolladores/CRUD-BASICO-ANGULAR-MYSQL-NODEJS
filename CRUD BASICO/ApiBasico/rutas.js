const router = require('express').Router()


//---------- agregamos rutas--------
router.get('/',function(req, res) {
    res.send('hola desde rutas express 123');
});




module.exports = router