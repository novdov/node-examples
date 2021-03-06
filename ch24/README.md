# Section 24: Working with REST APIs - The Basics

- Frontend: https://github.com/novdov/node-social-app

## How to run (with babel)
```bash
npx nodemon --exec babel-node app.js
```

## Http Methods

- `GET`: Get a resource from the server
- `POST`: Post a resource to the server (to create a or append resource)
- `PUT`: Put a resource onto the server (i.e. creeate or overwrite a resource)
- `PATCH`: Update parts of an existing resource on the server
- `DELETE`: Delete a resource on the server
- `OPTIONS`: Determine whether follow-up request is allowed (sent automatically)

## What is CORS

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

## Sending POST request (in JS)

To send POST request to server, two things need to be doen in client.

- Set headers (In this case, `Content-Type: applicaton/json`)
- Jsonify body via `JSON.stringify`


## How Authentication works in REST APIs
- We cannot use session since RESTful API is stateless. Instead, we use token.
- Process
    - Client sends auth data to server
    - Server sends token to client
        - Client stores token
        - Client send token to authorize subsequent request


### JSON Web Token (JWT)
- JWT: JSON data + Signature
    - Signature can be verified by server