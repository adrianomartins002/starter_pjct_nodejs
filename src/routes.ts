import { Router } from 'express'
import DadoController from './controllers/DadoController'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/dado', DadoController.find)
routes.post('/dado', DadoController.create)

routes.post('/user', UserController.register)
routes.get('/user', UserController.index)
routes.post('/authenticate', UserController.authenticate)

export default routes
