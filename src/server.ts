import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
 
import './database'
import routes from './routes'
import cors from 'cors';
import path from 'path';
import AppError from './erros/AppError';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Error inesperado, error internal aplication',
    });
});

app.listen(3333, () => {
    console.log('Starteeeer!!')
});