export const getAllUsersService = async (getAllUsers: Function) => {
  const users = await getAllUsers()
  return users
}
