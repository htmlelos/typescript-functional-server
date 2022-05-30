import { RequestHandler, Request, Response, NextFunction } from 'express'
import z, { ZodError } from 'zod'
import { userDTOSchema } from './user.entities'

export const validateCreateUser: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
  try {
    const result = userDTOSchema.parse(request.body)
    return next()
  } catch (error: ZodError | any) {
    if (error instanceof ZodError) {
      const { issues } = error
      const messages = issues.map((issue) => issue.message)
      return response.status(400).send(messages)
    }
    return response.status(500).send(error)
  }
}
