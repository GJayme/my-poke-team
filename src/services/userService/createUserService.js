const db = require('../../models');
const User = db.users;

const createUser = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).send({
            message: 'Name, email and password could not be empty.'
        });
        return;
    }

    const user = {
        name: req.body.name,
        email: req.body.email,
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

module.exports = { createUser }