import http from 'http'
import { app, PORT } from './app'
import { logger } from './logger/logger'

const server = http.createServer(app)
server.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`)
})
