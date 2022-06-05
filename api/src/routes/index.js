const { Router } = require('express');
const router = Router();
const {Country, Activity} = require ("../db");
const Countries = require("./Countries")
const Activities= require("./Activities");


router.use("/countries", Countries)
router.use("/activities", Activities)

module.exports= router;
