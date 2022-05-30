import { Request, RequestHandler, Response } from 'express'
import { createUserService, getAllUsersService } from './user.service'
import { createUser, getAllUsers } from './users.repository'

export const getAllUsersController: RequestHandler = async (request: Request, response: Response) => {
  const user = await getAllUsersService(getAllUsers)
  response.status(200).send(user)
}

export const createUserController: RequestHandler = async (request: Request, response: Response) => {
  const user = await createUserService(createUser, request.body)
  response.status(200).send(user)
}
