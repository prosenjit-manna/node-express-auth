import { cleanEnv, str, num } from 'envalid';

export const get_env = cleanEnv(process.env, {
  PORT: num({ desc: 'Server Port' }),
  MONGO_DB_URI: str({ default: 'mongodb://{userName}:{password}@{host}:{port}' }),
  MONGO_DB_NAME: str({ default: 'db' }),
  JSON_WEB_TOKEN_SECRET: str({ default: 'b88a6216-dff7-4a4e-928e-f66c41e06d50' }),
  JSON_WEB_TOKEN_EXPIRY: str({ default: '1h' }),
});
