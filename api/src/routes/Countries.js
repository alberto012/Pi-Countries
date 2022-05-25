const { Router } = require('express');
const {Country} = require('../db');
const router = Router();
const axios= require('axios')

router.get("/", async (req, res) => {
    try {
        const dataBase = await Country.findAll();
        if (!dataBase.length) {

            let apiInfo = await axios.get(`https://restcountries.com/v3/all`);
            let callFinal= apiInfo.data
            let infoMapeado = callFinal?.map((e) => {
                return {
                    id: e.cca3,
                    name: e.name.common,
                    flags: e.flags[1],
                    continents: e.continents[0],
                    capital: e.capital ? e.capital[0] : "no hay capital",
                    subregion: e.subregion,
                    area: e.area,
                    population: e.population,
                    // activity: e.activity?.map(e => e),
                };
            });

            await Country.bulkCreate(infoMapeado);


            const newCall = await Country.findAll();
            return res.status(200).json(newCall);
        }

        res.status(200).json(dataBase);
    } catch (error) {
        console.log(error);
    }});

module.exports = router;