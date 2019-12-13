import { Router } from 'express'
import DadoController from './controllers/DadoController'

const routes = Router()

routes.get('/dado', DadoController.find)
routes.post('/dado', DadoController.create)

export default routes
