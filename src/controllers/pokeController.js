const { getPokeByIdOrName, getPokeList } = require('../services/pokeService');

exports.findOne = (req, res) => {
    getPokeByIdOrName(req, res);
}

exports.getPokePaginated = (req, res) => {
    getPokeList(req, res);
}