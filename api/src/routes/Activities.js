const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");

// Ruta para mostrar todos los activities

router.get("/", async (req, res) => {

  const paises = await Country.findAll({
    include: {
      model: Activity,
      attributes: [ "name", "difficult", "duration", "season",],
      through: {
        attributes: [],
      },
    },
  });
  const act = paises.map((e) => e);
  const newAct = new Set(act);

  const activity = Array.from(newAct);
  res.status(200).send(activity);
});

router.post("/", async (req, res) => {
  const { countries, name, difficult, duration, season } = req.body;
  
  if(!name || !difficult || !duration || !season  || !countries){
    return 
}
  const act = await Activity.create({
    name,
    difficult,
    duration,
    season,
  });
  let countryDb = await Country.findAll({
    where: { name: countries },
  });

  await act.addCountry(countryDb);
  let newA = await Activity.findAll({
    where: { name: name },
    include: Country,
  });

  res.status(200).send("Actividad creada");
});

module.exports = router;
