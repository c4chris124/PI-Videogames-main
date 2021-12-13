const { default: axios } = require('axios');
const { Router } = require('express');
const { API_KEY } = process.env
const { Gender } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// initiating server and getting genders and saving them into my database, in order to use them from my database
const handleGenders = async () => {
    let gendersPromiseApi
    try {
        gendersPromiseApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        const { data } = gendersPromiseApi
        data.results.map(async (gender) => (
            await Gender.create({
                id: gender.id,
                name: gender.name,
                image_background: gender.image_background
            })
        ))
    } catch (error) {
        console.log(error);
    }
}
handleGenders()

router.get('/', async (req, res, next) => {
    try {
        let genders = await Gender.findAll(
            {
                order: [
                    ['name', 'ASC']
                ]
            }
        )
        res.send(genders)
    } catch (error) {
        next(error)
    }
})

module.exports = router;