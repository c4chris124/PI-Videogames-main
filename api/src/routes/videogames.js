require('dotenv').config();
const { Router } = require('express');
const {Op} = require('sequelize')
const axios = require('axios')
const {Videogame, Gender} = require('../db')
const {API_KEY} = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// page handler page by default just show 20 result per page
const pageHandler = async () => {
try {
    let firstPage = [], secondPage = [], thirdPage = []
    firstPage = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)
    let urlNext = firstPage.data.next
    //i have to match it, to have the variable with data and the use it
    firstPage = [...firstPage.data.results]
    // continue with second page getting urlNext from first page
    secondPage = await axios.get(urlNext)
    urlNext = secondPage.data.next
    secondPage = [...secondPage.data.results]
    // third page 
    thirdPage = await axios.get(urlNext)
    thirdPage = [...thirdPage.data.results]
    const results =  [...firstPage, ...secondPage, ...thirdPage]
    return results
} catch (error) {
 console.log(error);  
}
}

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req, res, next) => {
    let {name} = req.query
    let videogamePromiseApi
    let videogamesDB
    if (name) {
        videogamePromiseApi = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`) //&page_size=15
        videogamesDB = await Videogame.findAll({ //promise
            include: Gender,
            where: {
                name: {
                    [Op.iLike]: "%" + name + "%" //
                }
            },
            order:[
                ['name', 'ASC']
            ]
        })
    } else {
        videogamesDB = await Videogame.findAll({ //promise
            include: Gender
        })
    }
        Promise.all([
            // promise function
            pageHandler(),
            videogamesDB
        ])
        .then((response) => {
            const [
                results, //API response
                videogamesDB // DB response
            ] = response
            let filteredGames = results.map((game) => {
                return { //remove unnecessary data
                    id: game.id,
                    name: game.name,
                    background_image: game.background_image,
                    released: game.released,
                    rating: game.ratings_count,
                    platforms: game.platforms,
                    genres: game.genres.map((g) => g.name).join(', ')
                }
            })
            
            let allGames = [...filteredGames, ...videogamesDB] //concat data
            res.send(allGames)
        })
        .catch((error) => next(error))
})

router.get('/:id', async (req, res, next) => { //to get videogame  
    try {
        const {id} = req.params
        let games
        if (typeof id === 'string' && id.length > 8) {
            //if is from my DB
            games = await Videogame.findByPk(id)
        } else {
            // is from the API
            let response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            games = response.data
        }
        res.send(games)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {name, image, description, releaseDate, rating, platforms} = req.body
        const newVideogame = await Videogame.create({
            name,
            image,
            description,
            releaseDate,
            rating,
            platforms
        })
    } catch (error) {
        next(error)
    }
})

// relation game and gender
router.post('/:videogameId/genders/:genderId', async (req, res, next) => {
    try {
        const {videogameId, genderId} = req.params
        const videogame = await Videogame.findByPk(videogameId)
        await videogame.addGender(genderId) //mixins sequelize add+(table name)
        res.sendStatus(200)
    } catch (error) {
        next(error)        
    }

})

module.exports = router;
