import { Router } from 'express'
import { createUserController, getAllUsersController } from './user.controller'
import { validateCreateUser } from './user.validators'

export const router = Router()

router.get('/', getAllUsersController)
router.post('/', [validateCreateUser], createUserController)
