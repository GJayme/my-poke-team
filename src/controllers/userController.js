const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../services/userService");

exports.create = (req, res) => {
    createUser(req, res);
};

exports.findAll = (req, res) => {
    getAllUsers(req, res);
};

exports.findOne = (req, res) => {
    getUserById(req, res);
};

exports.update = (req, res) => {
    updateUser(req, res);
};

exports.delete = (req, res) => {
    deleteUser(req, res);
};
