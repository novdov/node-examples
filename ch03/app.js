import * as http from 'http'

import * as routes from './routes'

const server = http.createServer(routes.handler)

server.listen(3000)
