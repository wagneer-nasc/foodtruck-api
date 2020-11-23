import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import AppError from '../erros/AppError';
import Store from '../models/Store';
import storeView from '../views/store_view';

export default {

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const storesRepository = getRepository(Store);
        await storesRepository.delete(id);
        console.log(id)
    },

    async listStoreUser(request: Request, response: Response) {
        const { user_id } = request.params;
        const storesRepository = getRepository(Store);
        const stores = await storesRepository.find({
            relations: ['images'],
            where: {
                user_id
            }
        })

        return response.json(storeView.renderMany(stores));
    },
    async index(request: Request, response: Response) {
        const storesRepository = getRepository(Store)

        const stores = await storesRepository.find({
            relations: ['images']
        });

        return response.json(storeView.renderMany(stores));
    },
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const storesRepository = getRepository(Store)
        const store = await storesRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(storeView.render(store));
    },

    async create(request: Request, response: Response) {
        //  console.log(request.user) // esse id do usuario esta presente em todas as rotas que precisam de autenticacao, isso foi definido em ensureAuthenticated,
        const storesRepository = getRepository(Store)
        const {
            name,
            address,
            description,
            is_delivery,
            opening_days,
            opening_hours,
            user_id,
            contact,
        } = request.body;

        const stores = await storesRepository.find({
            relations: ['images'],
            where: {
                user_id
            }
        })
        if (stores.length === 2) {
            throw new AppError(' you can only add 2 stores.');
        }

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const store = storesRepository.create({
            name,
            address,
            description,
            is_delivery,
            opening_days,
            opening_hours,
            contact,
            images,
            user_id,
        })
        await storesRepository.save(store);
        return response.json(store)

    },


}
