const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('./User/model')
const userRouter = require('./User/router')
const Ticket = require('./Ticket/model')
const ticketRouter = require('./Ticket/router')
const Event = require('./Event/model')
const eventRouter = require('./Event/router')
const Comment = require('./Comment/model')
const commentRouter = require('./Comment/router')

Ticket.belongsTo(User)
User.hasMany(Ticket)

Ticket.belongsTo(Event)
Event.hasMany(Ticket)

Comment.belongsTo(Ticket)
Ticket.hasMany(Comment)

Comment.belongsTo(User)
User.hasMany(Comment)

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(userRouter)
app.use(ticketRouter)
app.use(eventRouter)
app.use(commentRouter)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Listening on port ${port}!`))










