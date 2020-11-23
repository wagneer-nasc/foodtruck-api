import { Router } from 'express'
import SessionsController from '../controllers/SessionsController';
 
const sessionsRouter = Router();
 
console.log('Sessions controler')
sessionsRouter.post('/', SessionsController.session);

 
 
export default sessionsRouter;