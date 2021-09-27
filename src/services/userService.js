const db = require('../models');
const User = db.users;

exports.getAllUsers = async (req, res) => {
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

exports.getUserById = async (req, res) => {
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

exports.createUser = async (req, res) => {
    if (!req.body.name || !req.body.gender || !req.body.password) {
        res.status(400).send({
            message: 'Name, gender and password could not be empty.'
        });
        return;
    }

    const user = {
        name: req.body.name,
        gender: req.body.gender,
        password: req.body.password
    };

    User.create(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            })
        })
}

exports.updateUser = async (req, res) =>{
    const userId = req.params.id;

    User.update(req.body, {
        where: { id: userId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${userId}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + userId
            });
        });
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}