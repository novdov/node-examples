import express from 'express'
import * as bodyParser from 'body-parser'

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()

// We should ues `body-parser` like this in express 4
app.use(bodyParser.urlencoded({ extended: true }))

// Admin router
// add segment. Url only starts with admin will be handled by adminRouter
app.use('/admin', adminRouter)
// Shop Router
app.use(shopRouter)

app.use('/', (req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)
