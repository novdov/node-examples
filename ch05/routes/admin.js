import express from 'express'

const router = express.Router()

router.use('/add-product', (req, res, next) => {
  console.log('In another middleware!')
  res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
})

router.post('/product', (req, res, next) => {
  // In default, request doesn't try to parse request body
  // To parse request body, we should use `body-parser` middleware
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
