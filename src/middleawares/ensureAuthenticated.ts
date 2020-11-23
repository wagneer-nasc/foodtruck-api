import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from '../config/auth';
import AppError from "../erros/AppError";

interface TokenPayload {
    iat: number,
    exp: number,
    sub: string,
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction): void {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT token is missing', 401);
    }
    //type token = Bearer token aosjiajsioj
    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jtw.secret);

        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub,
        }

        return next();
    } catch (err) {
        throw new AppError('invalid JTW token', 401);

    }

}