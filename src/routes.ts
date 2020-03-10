import {Router} from 'express';
import UserController from './controllers/UserController';


const routes = Router();

routes.get('/', (req, res) => {
  res.send('heloo bb 2 ');
})
routes.get('/users', UserController.index)
routes.get('/users/create', UserController.create)

export default routes; 