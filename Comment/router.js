const { Router } = require('express')
const Comment = require('./model')
const auth = require('../auth/middleware')

const router = new Router ()

router.get('/comment/:ticketId', (req, res, next) => {
  Comment
    .findAll({where: {ticketId: req.params.ticketId}})
    .then(comments => res.send(comments))
    .catch(next)
})

router.post('/comment', auth, (req, res, next) => {
  Comment
    .create(req.body)
    .then(comment => res.send(comment))
    .catch(next)
})

module.exports = router