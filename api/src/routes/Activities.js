const {Router}= require('express')
const router= Router();
const {Activity,Country}= require("../db")

// Ruta para mostrar todos los activities



//Ruta para crear los activities
router.post("/", async(req,res)=>{
const {countries, name, difficult,duration,season}= req.body;
const act= await Activity.create({
    name, difficult,duration,season
})
let countryDb = await Country.findAll({
    where: {name:countries}
});

await act.addCountry(countryDb);
let newA= await Activity.findAll({
    where:{name:name},
    include: Country
})
console.log(newA);
res.status(200).send ("Actividad creada")
})

module.exports =router;