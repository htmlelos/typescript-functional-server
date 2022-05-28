import cors from 'cors'
import express, { Express } from 'express'
import morgan from 'morgan'
import config from './config'
import { router } from './router'

export const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))
app.use(router)

export const PORT = config.service.PORT

app.set('PORT', PORT)
