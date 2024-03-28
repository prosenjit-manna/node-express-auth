import mongoose from 'mongoose';
import { get_env } from '../lib/get-env';

export async function dbConnect() {
  try {
    await mongoose.connect(get_env.MONGO_DB_URI, { dbName: get_env.MONGO_DB_NAME });
  } catch (e: any) {
    console.log(e.message);
  }
}
