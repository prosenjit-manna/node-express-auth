import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT ?? 4000;

app.get('/', (req: Request, res: Response) => {
  console.log('hello world');
  res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
  console.log(`API Server running at http://localhost:${port}`);
});
