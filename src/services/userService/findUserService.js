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
          err.message || 'Some error occurred while retrieving users.'
      });
    });
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  User.findByPk(userId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving User with id=' + userId
      });
    });
};

const getUserByEmailAndPassword = async (req, res) => {
  db.sequelize.query('SELECT * FROM users WHERE email = :email AND password = :password', {
    replacements: {
      email: req.body.email,
      password: req.body.password
    },
    type: db.sequelize.QueryTypes.SELECT
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send({
        message: 'User not found!'
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmailAndPassword
};