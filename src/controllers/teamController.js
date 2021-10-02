const { getTeamById, getTeamByUserId, addNewPokeOnTeam } = require('../services/teamService');

exports.findById = (req, res) => {
    getTeamById(req, res);
}

exports.findByUserId = (req, res) => {
    getTeamByUserId(req, res);
}

exports.addNewPoke = (req, res) => {
    addNewPokeOnTeam(req, res);
}