import { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

export interface AppJwtPayload extends JwtPayload {
  userId: string;
}

export interface AppExpressRequest extends Request {
  userId: string;
}
