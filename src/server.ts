import express from 'express'
import { applyMiddleware } from './utils'
import middleware from './middleware'
import app from './app'
import errorHandlers from './middleware/errorHandlers'
import { Auth } from './middleware/auth'

process.on('uncaughtException', e => {
  console.log(e)
  process.exit(1)
})

process.on('unhandledRejection', e => {
  console.log(e)
  process.exit(1)
})

const router = express()
router.use(Auth.auth)
applyMiddleware(middleware, router.use(app))
applyMiddleware(errorHandlers, router)

const { PORT = 8001 } = process.env
router.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`))
