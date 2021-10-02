const { getTeamById, getTeamByUserId} = require('../services/teamService/findTeamService');
const { createNewTeam } = require('../services/teamService/createTeamService');
const { deleteTeam } = require('../services/teamService/deleteTeamService');
const { addNewPokeOnTeam } = require('../services/teamService/addPokeOnTeamService');
const { removePokeOfTeam } = require('../services/teamService/removePokeOfTeamService');

exports.findById = (req, res) => {
    getTeamById(req, res);
}

exports.findByUserId = (req, res) => {
    getTeamByUserId(req, res);
}

exports.createNewTeam = (req, res) => {
    createNewTeam(req, res);
}

exports.deleteTeam = (req, res) => {
    deleteTeam(req, res);
}

exports.addNewPoke = (req, res) => {
    addNewPokeOnTeam(req, res);
}

exports.removePoke = (req, res) => {
    removePokeOfTeam(req, res);
}