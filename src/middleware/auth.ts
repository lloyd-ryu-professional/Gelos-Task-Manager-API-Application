import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";

interface AuthenticatedRequest extends Request {
    user?: any;
}

export const auth = async (req: AuthenticatedRequest,  res: Response, next: NextFunction) => {

    const authHeader: any = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET missing");
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token, authorization denied' });
    }
};

