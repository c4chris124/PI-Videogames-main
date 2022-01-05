require('dotenv').config();
const { Router } = require('express');
const { Op } = require('sequelize')
const axios = require('axios')
const { Videogame, Gender } = require('../db')
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// page handler page by default just show 40 result per page
const pageHandler = async (next) => {
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
        return [...firstPage, ...secondPage, ...thirdPage]
        // const results =  [...firstPage, ...secondPage, ...thirdPage]
        // return results
    } catch (error) {
        // pass a parameter handler error
        next(error)
    }
}

const router = Router();
// const backup = require('../../db/db.json')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req, res, next) => {
    let {name} = req.query
    let videogamePromiseApi
    let videogamesDB
    if (name) {
        videogamePromiseApi = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`).then((results) => { return results.data.results })
        videogamesDB = await Videogame.findAll({ //promise
            include: Gender,
            where: {
                name: {
                    [Op.iLike]: "%" + name + "%" //
                }
            },
            order: [
                ['name', 'ASC']
            ]
        })
    } else {
        // videogamePromiseApi = backup.results
        videogamePromiseApi = pageHandler(next)
        videogamesDB = await Videogame.findAll({ //promise
            include: Gender
        })
    }
    Promise.all([
        // promise function
        videogamePromiseApi,
        videogamesDB
    ])
        .then((response) => {
            const [
                videogamePromiseApi, //API response
                videogamesDB // DB response
            ] = response
            let filteredGames = videogamePromiseApi.map((game) => {
                return { //remove unnecessary data
                    id: game.id,
                    name: game.name,
                    background_image: game.background_image,
                    released: game.released,
                    rating: game.rating,
                    platforms: game.platforms.map(p => p.platform.name),
                    genres: game.genres.map((g) => g.name)
                }
            })

            let allGames = [...filteredGames, ...videogamesDB] //concat data
            res.send(allGames)
        })
        .catch((error) => next(error))
})

router.get('/:id', async (req, res, next) => { //to get videogame  
    try {
        const { id } = req.params
        let games
        let data = []
        let dataDB =  []
        if (typeof id === 'string' && id.length > 8) {
            //if is from my DB
            let response = await Videogame.findOne({ //findbypk was not working with property includes: Gender
                include: Gender,
                where: {
                    id: id
                }
            })
            games = response.dataValues
        } else {
            // is from the API
            let response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            const entries = Object.entries(response.data)
            data.push(Object.fromEntries(entries))
            
            const gamesData = data.map((game) => {
                return {
                    id: game.id,
                    name: game.name,
                    description: game.description,
                    released: game.released,
                    background_image: game.background_image,
                    rating: game.rating,
                    platforms: game.platforms.map(p => p.platform.name).join(', '),
                    genres: game.genres.map((g) => g.name).join(', ')
                }
            })
            games = gamesData[0]
        }
        res.send(games)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, background_image, description, released, rating, platforms, genders } = req.body
        const newVideogame = await Videogame.create({
            name,
            background_image,
            description,
            released,
            rating,
            platforms,
            genders
        })

        genders?.map(async name => {
            let search = await Gender.findAll({
              where: { name: name },
            });
            newVideogame.addGender(search);
          })
        
    } catch (error) {
        next(error)
    }
})

// relation game and gender/ didn't work this way
// router.post('/:videogameId/genders/:genderId', async (req, res, next) => {
//     try {
//         const { videogameId, genderId } = req.params
//         const videogame = await Videogame.findByPk(videogameId)
//         await videogame.addGender(genderId) //mixins sequelize add+(table name)
//         res.sendStatus(200)
//     } catch (error) {
//         next(error)
//     }

// })

module.exports = router;
