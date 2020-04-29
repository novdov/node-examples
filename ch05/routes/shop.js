import express from 'express'

const router = express.Router()

// GET: exact match (unlike use)
router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>')
})

module.exports = router
