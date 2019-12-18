import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
const authConfig = require('../config/auth')

export class Auth {
  public static auth (req: Request, res: Response, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) { return res.status(401).send({ error: 'Sem token!' }) }

    const parts = authHeader.split(' ')

    if (!parts.length == 2) { return res.status(401).send({ error: 'Token error!' }) }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) { return res.status(401).send({ error: 'Token mal formatado' }) }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) return res.status(401).send({ error: 'Token invalido' })

      req.userId = decoded.id
      return next()
    })
  }
}
