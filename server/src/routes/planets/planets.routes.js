

const express = require('express');

const {getAllplanets,} = require('./planets.controller')

const planetRouter = express.Router();

planetRouter.get('./planets', getAllplanets);

module.exports = planetRouter;