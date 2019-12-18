import { Request, Response } from 'express'

class AuthController {
  public async autenticacao (req:Request, res:Response):Promise<Response> {
    const { email, senha } = req.body
    const user = await User.findOne()
  }
}

export default new AuthController()
