import { Request, RequestHandler, Response } from 'express'
import { getAllUsersService } from './user.service'
import { getAllUsers } from './users.repository'

export const userController: RequestHandler = async (request: Request, response: Response) => {
  const user = await getAllUsersService(getAllUsers)
  response.status(200).send(user)
}
