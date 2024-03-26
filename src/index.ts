import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import authRoutes from './view/auth';
import { dbConnect } from './db/connection';

dotenv.config();

dbConnect();

const app = express();
const port = process.env.PORT ?? 4000;
app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  console.log('hello world');
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`API Server running at http://localhost:${port}`);
});
