const dbConfig = require('../config/db.config');
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user')(sequelize, Sequelize);
db.teams = require('./team')(sequelize, Sequelize);

db.users.hasMany(db.teams, { as: "teams" });
// db.teams.belongsTo(db.users, {
//     foreignKey: "user_id"
// });

module.exports = db;