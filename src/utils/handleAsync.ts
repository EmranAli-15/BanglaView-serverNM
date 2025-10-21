import { NextFunction, Request, Response } from "express";

export const handleAsync = (fn: Function) => {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await fn(req, res);
            next();
        } catch (error: any) {
            res.status(404).json({
                message: error.message || "Something went wrong."
            })
        }
    }
}