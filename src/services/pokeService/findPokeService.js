const axios = require('axios');

exports.getPokeByIdOrName = async (req, res) => {
    const pokeNameOrId = req.body.name;

    let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNameOrId}/`)
        .then(resp => resp.data)
        .catch(err => err)

    const pokeDTO = buildPokeDto(poke);

    res.json(pokeDTO);
}

exports.getPokeList = async (req, res) => {
    let limit = 25;
    const numberPage = req.params.paginate;
    let offset = limit*numberPage - limit;

    let poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(resp => resp.data)
        .catch(err => err)

    const pokeList = await setPokeList(poke)

    res.json(pokeList);
}

async function setPokeList(poke) {
    const list = [];

    for (const p of poke.results) {
        let completedPoke = await getInfo(p);
        let pokeDTO = buildPokeDto(completedPoke);
        list.push(pokeDTO);
    }
    return list;
}

async function getInfo(poke) {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}/`)
        .then(resp => resp.data)
        .catch(err => err);
}

function buildPokeDto(poke) {
    const abilities = setAbilities(poke);
    return {
        id: poke.id,
        name: poke.name,
        abilities: abilities,
        height: poke.height,
        weight: poke.weight,
        image: poke.sprites.front_default
    };
}

function setAbilities(poke) {
    const abilities = [];
    if (poke.abilities !== undefined) {
        poke.abilities.forEach(ability => abilities.push(ability.ability.name))
    }
    return abilities;
}