import * as path from 'path'

import express from 'express'

const rootDir = require('../utils/path')

const router = express.Router()

// GET: exact match (unlike use)
router.get('/', (req, res, next) => {
  // Do not use "/" here for os compatibility
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router
