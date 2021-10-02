const db = require('../../models');
const Team = db.teams;

const removePokeOfTeam = async (req, res) => {
    let pokeList = [];
    const team = await Team.findByPk(req.body.teamId)
        .then(resp => resp.dataValues)
        .catch(err => err);

    pokeList = JSON.parse(team.pokes);

    if (pokeList === null) {
        res.send({
            message: "Poke list is null. No pokes to remove."
        })
    }

    let pokeIndex = -1;
    for (let i = 0; i < pokeList.length; i++) {
        if (pokeList[i].id === req.body.pokeId) {
            pokeIndex = i;
        }
    }

    if (pokeIndex === -1) {
        res.send({
            message: "Poke not found in this team."
        })
    }

    pokeList.splice(pokeIndex, 1);
    team.pokes = JSON.stringify(pokeList);
    Team.update(team, {
        where: { id: req.body.teamId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Poke was removed successfully."
                });
            } else {
                res.send({
                    message: "Cannot remove Poke."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error removing Poke in team of id=" + req.body.teamId
            });
        });
}

module.exports = { removePokeOfTeam }

