
import { Router } from 'express'
import cors from 'cors'
import parser from 'body-parser'
import compression from 'compression'
import { IRouter } from 'express-serve-static-core'

export const handleCors = (router: Router):IRouter =>
  router.use(cors({ credentials: true, origin: true }))

export const handleBodyRequestParsing = (router: Router) :void => {
  router.use(parser.urlencoded({ extended: true }))
  router.use(parser.json())
}

export const handleCompression = (router: Router) :void => {
  router.use(compression())
}
