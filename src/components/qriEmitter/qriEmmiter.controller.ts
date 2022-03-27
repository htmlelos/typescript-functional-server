import { Request, Response, NextFunction } from 'express'
import { logger } from '../logger/logger'
import { validate } from '../validator/validator'

const qriSchema = {
  type: 'object',
  properties: {
    fullName: { type: 'string' },
    document: { type: 'string' },
    amount: { type: 'number' },
  },
  required: ['fullName', 'document', 'amount'],
}

export const validateQriSchema = (req: Request, res: Response, next: NextFunction) => validate(qriSchema)

export const qriEmmiterController = (req: Request, res: Response) => {
  const { qri } = req.body
  logger.debug(`Emmiter Controller Data: ${qri}`)
  res.status(200).send('QR EMITTER')
}
