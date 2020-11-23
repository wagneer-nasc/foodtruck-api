import { Router } from 'express'
import multer from 'multer';
import StoresController from '../controllers/StoresController';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middleawares/ensureAuthenticated';

const storesRoutes = Router();
const upload = multer(uploadConfig);

storesRoutes.get('/user/:user_id', ensureAuthenticated, StoresController.listStoreUser);
storesRoutes.post('/', ensureAuthenticated, upload.array('images'), StoresController.create);
storesRoutes.get('/', StoresController.index);
storesRoutes.get('/:id', StoresController.show);
storesRoutes.delete('/:id', StoresController.delete);

export default storesRoutes;