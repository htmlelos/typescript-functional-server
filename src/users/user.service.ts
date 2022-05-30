import { UserDTO } from './user.entities'

export const getAllUsersService = async (getAllUsers: Function) => {
  const users = await getAllUsers()
  return users
}

export const createUserService = async (createUser: Function, user: UserDTO) => {
  const userCreated = await createUser(user)
  return userCreated
}
