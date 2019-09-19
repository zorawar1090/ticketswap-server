const { Router } = require('express')
const Sequelize = require('sequelize')
const Event = require('./model')
const auth = require('../auth/middleware')

const Op = Sequelize.Op

const router = new Router()

router.get('/event', (req, res, next) => {
  const limit = req.query.limit || 1
  const offset = req.query.offset || 0

  Promise.all([
    Event.count(),
    Event.findAll(
      {
        limit, offset,
        where: {
          endDate: { [Op.gt]: new Date() }
        }
      })
  ])
    .then(([total, events]) => {
      res.send({
        events, total
      })
    })
    .catch(error => next(error))
})

router.post('/event', auth, (req, res, next) => {
  Event
    .create(req.body)
    .then(event => res.send(event))
    .catch(next)
})

module.exports = router