import express from 'express'
import * as bodyParser from 'body-parser'

const feedRouter = require('./routes/feed')

const app = express()

app.use(bodyParser.json())

// GET /feed/posts
app.use('/feed', feedRouter)

app.listen(8080)
