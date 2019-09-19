const Sequelize = require('sequelize')
const db = require('../db')

const Comment = db.define(
  'comment',
  {
    author: { type: Sequelize.STRING, allowNull: false },
    text: { type: Sequelize.STRING, allowNull: false }
  }
)

module.exports = Comment