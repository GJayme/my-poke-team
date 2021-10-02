const db = require('../../models');
const User = db.users;

const getAllUsers = async (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

const getUserById = async (req, res) => {
    const userId = req.params.id

    User.findByPk(userId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + userId
            });
        });
}

module.exports = {
    getAllUsers,
    getUserById
}