## Section 24: Working with REST APIs - The Basics

### What is CORS

- CORS: Cross-Origin Resource Sharing
- CORS Erorr
  - When share resources between serve/client which run on difference domain
  - To solve, server-side manipulation is required (NOT in client!)

  ```javascript
  app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PsATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  })
  next()
  ```
