import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import multer from 'multer'

const feedRouter = require('./routes/feed')
const authRouter = require('./routes/auth')

const app = express()
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

app.use(bodyParser.json())
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use((req, res, next) => {
  // Handle CORS Error
  // Allow frontend send request to server
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// GET /feed/posts
app.use('/feed', feedRouter)
app.use('/auth', authRouter)
app.use((error, req, res, next) => {
  console.log(error)
  // 500 if undefined error
  const statusCode = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(statusCode).json({ message: message, data: data })
})

mongoose.connect(
  'mongodb://localhost/database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(8080)
  })
  .catch(err => {
    console.log(err)
  })
