// Assignment of Section 3

import * as http from 'http'

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

  // Handle routes: "/"
  // Return greeting text
  if (url === '/') {
    res.write('<html>')
    res.write('<body><h1>Hello!</h1></body>')
    // Add a form with a "username" `<input>` to the `"/"` page
    // and submit a POST request to "`/create-user"` upon a button click
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form></body>')
    res.write('</html>')
    return res.end()
  }

  // Handle routes: "/users"
  // Return a list of dummy usere
  if (url === '/users') {
    res.write('<html>')
    res.write('<h1>Users</h1>')
    res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/create-user' && method === 'POST') {
    const body = []
    // Parse incoming data
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      // Log data to the console
      console.log(message)
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    })
  }
}

exports.handler = requestHandler
