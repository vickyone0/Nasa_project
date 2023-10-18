const { launches } = require('../../models/launches.model');
const {
    httpGetAllLaunches,
    httpAddNewLaunches,
} = require('./launches.controller');

const express = require('express');


const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);

launchesRouter.post('/', httpAddNewLaunches);

function getAllLaunches() {
    return Array.from(launches.values());
}

module.exports = {
    getAllLaunches,
};