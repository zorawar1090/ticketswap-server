const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define(
  'event',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    logo: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }
)

module.exports = Event