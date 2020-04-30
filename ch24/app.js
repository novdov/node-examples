import express from 'express'
import * as bodyParser from 'body-parser'

const feedRouter = require('./routes/feed')

const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// GET /feed/posts
app.use('/feed', feedRouter)

app.listen(8080)
