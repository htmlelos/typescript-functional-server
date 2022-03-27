import { Router } from 'express'
import { validateQriSchema, qriEmmiterController } from './qriEmmiter.controller'

export const router = Router()

router.post('/qri', validateQriSchema, qriEmmiterController)
