import z from 'zod'

export const USER_STATUS = ['S', 'N'] as const

export const userDTOSchema = z.object({
  id: z.string().optional(),
  username: z.string({
    required_error: 'El nombre de usuario es un dato requerido',
  }),
  password: z.string({
    required_error: 'La contraseña es un dato requerido',
  }),
  active: z.enum(USER_STATUS),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.string().optional(),
  updatedBy: z.string().optional(),
})

export type UserDTO = z.infer<typeof userDTOSchema>

export const userDAOSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  active: z.enum(USER_STATUS),
  created_at: z.date(),
  updated_at: z.date().optional(),
  created_by: z.string(),
  updated_by: z.string().optional(),
})

export type UserDAO = z.infer<typeof userDAOSchema>
