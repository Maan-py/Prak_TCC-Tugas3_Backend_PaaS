const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Note = sequelize.define("note", {
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

module.exports = Note;
