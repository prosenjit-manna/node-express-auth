import bcrypt from 'bcrypt';
import { UserModel } from '../models/User';
import jwt from 'jsonwebtoken';
import express, { Request, Response } from 'express';
import { get_env } from '../lib/get-env';
import { LoginRequest } from '../apiModel/login/loginRequest.interface';
import { LoginResponse } from '../apiModel/login/loginResponse.interface';
const router = express.Router();

router.post('/register', async ({ body }: { body: LoginRequest }, res: Response) => {
  try {
    const { username, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' }) as LoginResponse;
  } catch (error: any) {
    res.status(500).json({ error: error.message }) as LoginResponse;
  }
});

// User login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user._id }, get_env.JSON_WEB_TOKEN_SECRET, {
      expiresIn: get_env.JSON_WEB_TOKEN_EXPIRY,
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

router.get('/', (req: Request, res: Response) => {
  res.send('Auth');
});

export default router;
