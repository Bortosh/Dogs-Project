const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


const {getDog} = require ('./controllers')
const {createDogs} = require('./controllers')
const {getDogById} = require('./controllers')
const {getTemperament} = require('./api')




router.get('/temperaments', getTemperament)
router.get('/dogs', getDog)
router.get('/dogs/:id', getDogById)
router.post('/dogs', createDogs)





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
