import { Router } from 'express';
import usersRoutes from './users.routes';
import storesRoutes from './stores.routes';
import sessionsRoutes from './sessions.routes';

const routes = Router()

routes.use('/users', usersRoutes);
routes.use('/stores', storesRoutes);
routes.use('/sessions', sessionsRoutes);


export default routes;
