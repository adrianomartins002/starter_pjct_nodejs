
import { Request, Response } from 'express'
import { User } from '../schemas/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async register (req: Request, res: Response): Promise<Response> {
    console.log('teste:', req.body)
    const { email } = req.body
    try {
      if (await User.findOne({ email })) { return res.status(400).send({ error: 'Usuario já existe' }) }

      const user = await User.create(req.body)

      user.password = undefined

      return res.send({ user })
    } catch (e) {
      return res.status(400).send({ error: 'Falha ao registrar' })
    }
  }

  public async authenticate (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.status(400).send({ error: 'Usuario nao encontrado' })
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Senha invalida' })
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400
    })
    console.log(token)
    res.send({ user, token })
  }
}

export default new UserController()
