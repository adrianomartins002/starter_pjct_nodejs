import { Request, Response } from 'express'
import Dado from '../schemas/Dado'

class DadoController {
  public async find (req:Request, res:Response):Promise<Response> {
    const dado = await Dado.find()
    console.log("dado:", dado)
    return res.json(dado)
  }

  public async create (req:Request, res:Response):Promise<Response> {
    const dado = await Dado.create(req.body)
    return res.json(dado)
  }
}

export default new DadoController()
