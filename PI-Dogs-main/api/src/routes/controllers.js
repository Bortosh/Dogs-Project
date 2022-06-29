require('dotenv').config()
const { Dog, Temper, Op } = require('../db.js');
const {getAllDogs, dbDogs, getDogs} = require('./api.js')

const getDogById = async (req, res) => {
    try {
        const id = req.params.id
    if(id.length < 5) {
        const dog = await getDogs()
        const idDog = dog.find( item => item.id == id)
        idDog
        ? res.status(200).send(idDog)
        : res.status(404).send('Dog Not Found')
    }else {
        const dbDog = await dbDogs()
        const doggy = dbDog.find( item => item.id == id)
        doggy
        ? res.status(200).send(doggy)
        : res.status(404).send('Dog Not Found')
    }
    } catch (error) {
        res.status(404).send(error)
    }
}

const getDog = async (req, res) => {
    try {
        const name = req.query.name
    let allDogs = await getAllDogs()
    if(name) {
        let dogName = allDogs.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
        dogName
            ? res.status(200).send(dogName)
            : res.status(404).send('Dog Not Found')
    }else {
        res.status(200).send(allDogs)
    }
    } catch (error) {
        console.log(error)   
    }
}

const createDogs = async (req, res) => {
    
    try {
        let {name, weight, height, life_span, temperament, image} = req.body

        if(typeof name=='number') return res.status(400).send("The name can't be a number");

        if(!name || !weight || !height || !life_span || !temperament) {
            return res.status(404).send('Missing Data')
        }else {
        let dogCreated = await Dog.create({
                name,
                weight,
                height,
                life_span,
                image,
                temperament
            })
            const temperInDb = await Temper.findAll({
                where: {
                    name: temperament
            }})
            await dogCreated.addTemper(temperInDb)
            return res.status(201).send(dogCreated)
        }
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

module.exports = {createDogs, getDog, getDogById}