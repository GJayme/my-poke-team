const db = require('../models');
const Team = db.teams;

const getTeamById = async (req, res) => {
    const teamId = req.params.id

    Team.findByPk(teamId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Team with id:" + teamId
            });
        });
}

const getTeamByUserId = async (req, res) => {
    const userId = req.params.userId;

    db.sequelize.query("SELECT * FROM teams WHERE userId = :userId", {
        replacements: {userId: userId},
        type: db.sequelize.QueryTypes.SELECT
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(400).send({
                message: "Teams not found!"
            })
        })
}

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

module.exports = {getTeamById, getTeamByUserId, addNewPokeOnTeam}

