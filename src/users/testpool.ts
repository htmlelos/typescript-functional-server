import { findAllUsers } from './user.model'
import { UserModel } from './UserModel'

const test = async () => {
  console.log('TEST')
  const user: UserModel[] = await findAllUsers()
  console.log('USERS', user)
}

test()
