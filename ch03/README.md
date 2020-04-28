## Section 3: Understanding the Basics

### Creating a Node.js server
- Use `http` package
```node
const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request)
})

server.listen(3000)
```

### Using Node core modules

### Working with requests & ressponses (basics)