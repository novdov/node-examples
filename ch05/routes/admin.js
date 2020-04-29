import * as path from 'path'

import express from 'express'

const router = express.Router()

router.use('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
})

router.post('/product', (req, res, next) => {
  // In default, request doesn't try to parse request body
  // To parse request body, we should use `body-parser` middleware
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
