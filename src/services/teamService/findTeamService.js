const db = require('../../models');
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
            const response = {
                id: data[0].id,
                name: data[0].name,
                pokes: JSON.parse(data[0].pokes)
            }
            res.send(response);
        })
        .catch(err => {
            res.status(400).send({
                message: "Teams not found!"
            })
        })
}

module.exports = {
    getTeamById,
    getTeamByUserId
}