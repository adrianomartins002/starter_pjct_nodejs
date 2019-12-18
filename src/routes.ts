import { Router } from 'express'
import DadoController from './controllers/DadoController'
import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'

const routes = Router()

routes.get('/dado', DadoController.find)
routes.post('/dado', DadoController.create)

routes.post('/user', UserController.register)
routes.get('/user', UserController.index)

routes.post('/authenticate', AuthController.autenticacao)

export default routes
