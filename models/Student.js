const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});
