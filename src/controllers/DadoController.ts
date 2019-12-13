import { Request, Response } from 'express'
import Dado from '../schemas/Dado'

class UserController {
  public async find (req:Request, res:Response):Promise<Response> {
    const dado = await Dado.find()
    return res.json(dado)
  }

  public async create (req:Request, res:Response):Promise<Response> {
    const dado = await Dado.create(req.body)
    return res.json(dado)
  }
}

export default new UserController()
