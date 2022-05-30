import { findAllUsers, insertUser } from './user.model'
import { UserDTO } from './user.entities'

export const getAllUsers = async () => {
  const users = await findAllUsers()
  return users
}

export const createUser = async (user: UserDTO): Promise<UserDTO> => {
  const userCreated = await insertUser(user)
  return userCreated
}
