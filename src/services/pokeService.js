const axios = require('axios');
const {log} = require("nodemon/lib/utils");

exports.getPokeByIdOrName = async (req, res) => {
    const pokeNameOrId = req.body.name;

    function setAbilities(poke) {
        const abilities = [];
        poke.abilities.forEach(ability => abilities.push(ability.ability.name))
        return abilities;
    }

    let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNameOrId}/`)
        .then(resp => resp.data)
        .catch(err => err)

    const abilities = setAbilities(poke);

    const pokeDTO = {
        id: poke.id,
        name: poke.name,
        abilities: abilities,
        height: poke.height,
        weight: poke.weight,
        image: poke.sprites.front_default
    }

    res.json(pokeDTO);
}