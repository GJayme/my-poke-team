const { createUser } = require('../services/userService/createUserService');
const { getUserById, getAllUsers } = require('../services/userService/findUserService');
const { updateUser } = require('../services/userService/updateUserService');
const { deleteUser } = require("../services/userService/deleteUserService");

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
