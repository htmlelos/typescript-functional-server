import Ajv from 'ajv'
import { NextFunction } from 'express'
import { logger } from '../logger/logger'

const ajv = new Ajv()

export const validate = (schema: any) => {
  const validate = ajv.compile(schema)
  logger.debug('Validator Started')
  return (req: Request, res: Response, next: NextFunction) => {
    // validate(req.body) ? next() : next(new httpError.BadRequest(validate.errors)
    logger.debug(`Validator Request Body ${req.body}`)

    if (validate(req.body)) {
      next()
    } else {
      validate.errors?.map((error) => console.log(error.message))
      next('Failure')
    }
  }
}
