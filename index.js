const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:password@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db.sync({force: false})
  .then(() => console.log('Database connected'))
  .catch(console.error)

const Event = db.define(
  'event',
  {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    logo: Sequelize.STRING
  }
)

const Ticket = db.define(
  'ticket',
  {
    author: Sequelize.STRING,
    image: {type: Sequelize.STRING, allowNull: true},
    description: Sequelize.STRING
  }
)

const Comment = db.define(
  'comment',
  {
    author: Sequelize.STRING,
    text: Sequelize.STRING,
  }
)

Ticket.belongsTo(Event)
Event.hasMany(Ticket)

Comment.belongsTo(Ticket)
Ticket.hasMany(Comment)

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

const port = 4000

app.listen(() => console.log(`Listening on port ${port}!`))

app.get('/event', (req, res, next) => {
  Event
    .findAll()
    .then(events => res.send(events))
    .catch(next)
})


