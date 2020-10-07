import dbConfig from "../config/database.js";
import User from "./User";

import Sequelize from "sequelize";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    // acquire: dbConfig.pool.acquire,
    // idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = User(sequelize, Sequelize);

export default db;
