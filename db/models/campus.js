const db = require('../index');
const Sequelize = require('sequelize');
const DataTypes = db.Sequelize;

module.exports = db.define('Campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  }
})
