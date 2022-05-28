import { Router } from 'express'
import { getEchoController } from './echo/getEcho.controller'
import { router as userRouter } from './users/user.router'

export const router = Router()

router.get('/echo', getEchoController)
router.use('/users', userRouter)
