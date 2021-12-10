const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Gender } = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req, res, next) => {
    try {
        const genders = await Gender.findAll()
        res.send(genders)
    } catch (error) {
        next(error)
    }
})
router.post('/', async (req, res, next) => {
try {
    const { name, image_background } = req.body
    const newGender = await Gender.create({
        name,
        image_background
    })
    res.status(201).send(newGender)
} catch (error) {
    next(error)
}
})
router.put('/', (req, res, next) => {
    res.send("I'm put genders")
})
router.delete('/', (req, res, next) => {
    res.send("I'm delete genders")
})


module.exports = router;