import express from 'express'
import { getEchoController } from './getEcho.controller'
import { router as qriEmitterRoutes } from '../qriEmitter/qriEmitter.routes'

export const router = express.Router()

router.get('/echo', getEchoController)
router.use('/v1', qriEmitterRoutes)
