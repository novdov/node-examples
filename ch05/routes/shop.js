import * as path from 'path'

import express from 'express'

const router = express.Router()

// GET: exact match (unlike use)
router.get('/', (req, res, next) => {
  // Do not use "/" here for os compatibility
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
})

module.exports = router
