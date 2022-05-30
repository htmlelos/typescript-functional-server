import { query } from '../database/pool'
import { UserDAO, UserDTO } from './user.entities'
import { randomUUID as uuid } from 'crypto'

export const findAllUsers = async (): Promise<UserDTO[]> => {
  const userDAO = (await query('SELECT * FROM users')) as UserDAO[]
  const usersDTOs = userDAO.map((userDAO) => userToDTO(userDAO))
  return usersDTOs
}

export const insertUser = async (user: UserDTO): Promise<UserDTO> => {
  const userDAO = generateUser(user)
  const userCreated = (await query('INSERT INTO users SET ?', userDAO)) as UserDTO
  return { ...userCreated }
}

export const userToDTO = (userDAO: UserDAO): UserDTO => {
  const userDTO: UserDTO = {
    id: userDAO.id,
    username: userDAO.username,
    password: userDAO.password,
    active: userDAO.active,
    createdAt: userDAO.created_at,
    updatedAt: userDAO.updated_at,
    createdBy: userDAO.created_by,
    updatedBy: userDAO.updated_by,
  }

  return userDTO
}

export const userToDAO = (userDTO: UserDTO): UserDAO => {
  const now = new Date()
  const userDAO = {
    id: userDTO.id ?? '',
    username: userDTO.username,
    password: userDTO.password,
    active: userDTO.active,
    created_at: userDTO.createdAt ?? now,
    updated_at: userDTO.updatedAt,
    created_by: userDTO.createdBy ?? '',
    updated_by: userDTO.updatedBy,
  }

  return userDAO
}

const generateUser = (user: UserDTO) => {
  const id = uuid()
  const createdAt = new Date()
  const active = user.active ?? 'N'
  const createdBy = id
  const userDAO = userToDAO({ ...user, id, createdAt, active, createdBy })
  return userDAO
}
