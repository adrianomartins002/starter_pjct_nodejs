import express from 'express'
import { applyMiddleware } from './utils'
import middleware from './middleware'
import app from './app'

const router = express()
applyMiddleware(middleware, router.use(app))

const { PORT = 8001 } = process.env
router.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`))
