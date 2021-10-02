const db = require('../../models');
const Team = db.teams;

const addNewPokeOnTeam = async (req, res) => {
    let pokeList = [];
    const team = await Team.findByPk(req.body.teamId)
        .then(resp => resp.dataValues)
        .catch(err => err);

    if (team.pokes != null) {
        pokeList = JSON.parse(team.pokes);
        pokeList.push(req.body.poke);
    } else {
        pokeList.push(req.body.poke)
    }
    team.pokes = JSON.stringify(pokeList);
    Team.update(team, {
        where: { id: req.body.teamId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Poke was add successfully."
                });
            } else {
                res.send({
                    message: "Cannot add Poke."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error adding Poke in team of id=" + req.body.teamId
            });
        });
}

module.exports = { addNewPokeOnTeam }

