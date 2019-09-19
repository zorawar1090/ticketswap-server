const Sequelize = require('sequelize')
const db = require('../db')

const Ticket = db.define(
  'ticket',
  {
    author: {type: Sequelize.STRING, allowNull: false},
    image: { type: Sequelize.STRING, allowNull: true },
    price: { type: Sequelize.FLOAT, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false }
  }
)

module.exports = Ticket