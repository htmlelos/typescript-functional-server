import { query } from '../database/pool'
import { UserModel } from './UserModel'

export const findAllUsers = async () => {
  const users = (await query('SELECT * FROM users')) as UserModel[]
  return { ...users }
}
