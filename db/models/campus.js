const db = require('../index');
const DataTypes = db.Sequelize;

module.exports = db.define('campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
