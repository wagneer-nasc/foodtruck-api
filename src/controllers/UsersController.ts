import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import User from '../models/User';
import { hash } from 'bcryptjs';
import AppError from "../erros/AppError";


export default {

    async create(request: Request, response: Response) {
        const usersRepository = getRepository(User)
        const { name, email, password } = request.body;


        const checkExistEmail = await usersRepository.findOne({
            where: { email }
        });

        if (checkExistEmail)
            throw new AppError('Email já cadastrado.', 400);

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword,
        })

        await usersRepository.save(user);
        return response.json(user);

    }
}
