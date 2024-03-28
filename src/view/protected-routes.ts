import express, { Request, Response } from 'express';
import { verifyToken } from '../middlewares/authMiddleWare';

const router = express.Router();

router.post('/protected-routes', verifyToken, async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Protected route accessed' });
});

export default router;
