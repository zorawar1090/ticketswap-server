const { Router } = require('express')
const { toJWT } = require('../auth/jwt')
const bcrypt = require('bcrypt')
const User = require('./model')

const router = new Router()

router.post('/login', (req, res) => {
  const {email, password} = req.body

  if (email === "" || password === "") {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    })
  } else {
    User.findOne({
      where: {
        email: email
      }
    })
      .then(entity => {
        if (!entity) {
          res.status(400).send({
            message: 'Email does not exist'
          });
        } else {
          if (bcrypt.compareSync(password, entity.password)) {
            res.send({
              jwt: toJWT({ userId: entity.id }),
              name: entity.name,
              id: entity.id
            });
          } else {
            res.status(400).send({
              message: 'Password is incorrect'
            });
          }
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 'Something went wrong'
        })
      })
  }
})


router.post('/user', async (req, res) => {
  const { name, email, password } = req.body

  const existing = await User.findOne({ where: { email } })

  if (existing) {
    res.status(400).send(`The email ${email} is already in use`)
  } else {
    const encryptedPw = bcrypt.hashSync(password, 10)

    const user = await User.create({ name, email, password: encryptedPw })

    res.status(200).send({
      jwt: toJWT({ userId: user.id }),
      name: user.name,
      id: user.id,
    })
  }
})

module.exports = router