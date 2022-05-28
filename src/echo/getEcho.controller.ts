import { Request, Response } from 'express'

export const getEchoController = (req: Request, res: Response) => {
  return res.status(200).send('echo')
}
