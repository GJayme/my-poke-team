const { getPokeByIdOrName } = require('../services/pokeService');

exports.findOne = (req, res) => {
    getPokeByIdOrName(req, res);
}