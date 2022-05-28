import { findAllUsers } from './user.model'

export const getAllUsers = async () => {
  const users = await findAllUsers()
  return users
}
