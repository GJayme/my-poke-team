const db = require('../../models');
const User = db.users;

const updateUser = async (req, res) =>{
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

module.exports = { updateUser }