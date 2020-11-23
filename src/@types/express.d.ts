//definicao de types do typescript
declare namespace Express {
    export interface Request {
        user: {
            id: string, // add uma informacao nova no express
        }
    }
}