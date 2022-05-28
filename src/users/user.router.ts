import { Router } from 'express'
import { userController } from './user.controller'

export const router = Router()

router.get('/', userController)
