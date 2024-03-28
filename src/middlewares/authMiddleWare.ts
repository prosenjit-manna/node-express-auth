import jwt from 'jsonwebtoken';
import { Response, NextFunction, Request } from 'express';
import { get_env } from '../lib/get-env';
import { AppJwtPayload } from './authMiddleWare.interface';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, get_env.JSON_WEB_TOKEN_SECRET) as unknown as AppJwtPayload;
    req.userId = decoded.userId;
    next();
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
}
