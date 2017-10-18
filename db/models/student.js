const db = require('../index');
const DataTypes = db.Sequelize;

module.exports = db.define('student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
  }
})
