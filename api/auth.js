const express = require('express')
const cors = require('cors')

const mockToken = '9a8764e429781e3b90da47698e4ecd6e88306f3de2ee868fef49e13a0ed8d640'
const mockUser = {
  id: 1,
  name: 'Game',
  email: 'game@mail.com'
}

const app = express()

app.use(cors())
app.use(express.json())

app.get('/me', (req, res) => {
  const headers = req.headers.authorization

  const token = headers && headers.split(' ')[1] // Bearer Token

  if (token === mockToken) {
    return res.json({
      user: mockUser
    })
  } else {
    return res.status(401).json({
      message: 'Invalid token'
    })
  }
})

app.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email === 'admin@admin.com' && password === '123456') {
    return res.json({
      user: mockUser,
      token: mockToken
    })
  } else {
    return res.status(401).json({
      message: 'Invalid password',
      email: email,
      password: password,
    })
  }
})

module.exports = {
  path: '/api/auth',
  handler: app
}