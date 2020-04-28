import express from 'express'

const app = express()

// First middleare which logs incoming request to the console
app.use((req, res, next) => {
  console.log('Incoming requset')
  next()
})

app.use((req, res, next) => {
  res.send('<p>second middleare</p>')
  next()
})

app.use('/users', (req, res, next) => {
  res.send('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>')
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express.js</h1>')
})

app.listen(3000)
