const { Router } = require('express')
const Ticket = require('./model')
const auth = require('../auth/middleware')

const router = new Router()

router.post('/ticket', auth, (req, res, next) => {
  Ticket
    .create(req.body)
    .then(ticket => res.send(ticket))
    .catch(next)
})

router.get('/ticket/:eventId', (req, res, next) => {
  Ticket
    .findAll({ where: { eventId: req.params.eventId } })
    .then(tickets => res.send(tickets))
    .catch(next)
})

router.get('/ticket/author/:author', (req, res, next) => {
  Ticket
    .findAll({ where: { author: req.params.author } })
    .then(tickets => res.send(tickets))
    .catch(next)
})

router.put('/ticket/:ticketId', auth, async (req, res, next) => {
  const ticket = await Ticket.findByPk(req.params.ticketId)

  await ticket.update(req.body)
  res.send(ticket)
})

router.get('/event/ticket/:ticketId', (req, res, next) => {
  Ticket
    .findByPk(req.params.ticketId)
    .then(ticket => {
      return res.send(ticket)
    })
    .catch(next)
})

module.exports = router
