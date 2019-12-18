import { Request, Response } from 'express'
import { User } from '../schemas/User'

class AuthController {
  public async autenticacao (req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })

      user.password = undefined

      return res.send({ user })
    } catch (e) {
      return res.status(400).send({ error: 'Falha ao registrar' })
    }
  }
}

export default new AuthController()
