import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { AppExpressRequest, AppJwtPayload } from './authMiddleWare.interface';
import { get_env } from '../lib/get-env';

export function verifyToken(req: any, res: Response, next: NextFunction) {
  const request = req as unknown as AppExpressRequest;
  const token = request.header('Authorization');

  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded: AppJwtPayload = jwt.verify(token, get_env.JSON_WEB_TOKEN_SECRET) as AppJwtPayload;
    request.userId = decoded.userId;
    next();
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
}
