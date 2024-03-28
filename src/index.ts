import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { get_env } from './lib/get-env';

import authRoutes from './view/auth';
import protectedRoutes from './view/protected-routes';
import { dbConnect } from './db/connection';

dbConnect();

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.use(protectedRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API server up and running!');
});

app.listen(get_env.PORT, () => {
  console.log(`API Server running at http://localhost:${get_env.PORT}`);
});
