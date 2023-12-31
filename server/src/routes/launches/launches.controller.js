const {
    addNewLaunch,
} = require('../../models/launches.model');

const { launches } = require('../../models/launches.model');

function getAllLaunches() {
    return Array.from(launches.values());
}

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunches(req, res) {

    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate
        || !launch.destination) {
        return res.status(400).json({
            error: 'Missing required launch properties',
        })
    }

    launch.launchDate = new Date(launch.launchDate);

    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date'
        })
    }

    addNewLaunch(launch);

    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunches,
    getAllLaunches
}