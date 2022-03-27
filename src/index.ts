import cors from 'cors'
import express, { Express, Request, Response } from 'express'
import { logger } from './components/logger/logger'
import { router } from './components/router/router'
import config from './config'

export const addPlugins = (app: Express): void => {
  app.set('json replacer', (key: any, value: any) => {
    value === null ? undefined : value
  })
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(router)
}

export const init = () => {
  const app = express()
  addPlugins(app)
  return app
}

init().listen(config.service.PORT, () => {
  logger.info(`Server started on port ${config.service.PORT}`)
})
