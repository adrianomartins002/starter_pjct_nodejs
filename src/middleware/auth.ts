import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import authConfig from '../config/auth.json'

export class Auth {
  public static auth (req: Request, res: Response, next):Response {
    const authHeader = req.headers.authorization

    if (!authHeader) { return res.status(401).send({ error: 'Sem token!' }) }

    const parts:Array<string> = authHeader.split(' ')

    if (!parts.length == 2) { return res.status(401).send({ error: 'Token error!' }) }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) { return res.status(401).send({ error: 'Token mal formatado' }) }

    jwt.verify(token, authConfig.secret, (err, decoded:any) => {
      if (err) return res.status(401).send({ error: 'Token invalido' })

      req.userId = decoded.id
      return next()
    })
  }
}
