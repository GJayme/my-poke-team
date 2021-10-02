module.exports = (sequelize, Sequelize) => {
    return sequelize.define('team', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        pokes: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
    });
}