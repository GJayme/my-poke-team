const db = require('../../models');

const createNewTeam = async (req, res) => {
    db.sequelize.query("INSERT INTO teams (name, pokes, createdAt, updatedAt, userId) VALUES (:name, :pokes, :createdAt, :updatedAt, :userId)", {
        replacements: {
            name: req.body.teamName,
            pokes: null,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: req.body.userId,
        },
        type: db.sequelize.QueryTypes.INSERT
    })
        .then(resp => {
            res.send({
                id: resp[0],
                message: "Team create whit success."
            })
        })
        .catch(err => {
            res.status(500).send({
                message: "Something was wrong on Team creating."
            })
        })
}

module.exports = { createNewTeam }