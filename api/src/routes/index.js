const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRoute = require('./videogames')
const genderRoute = require('./genders')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogameRoute)
router.use('/genders', genderRoute)

module.exports = router;
