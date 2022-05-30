import { findAllUsers } from './user.model'
import { UserDTO } from './user.schema'

const test = async () => {
  console.log('TEST')
  const user: UserDTO[] = await findAllUsers()
  console.log('USERS', user)
}

test()
