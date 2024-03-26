import mongoose from 'mongoose';

export async function dbConnect() {
  try {
    await mongoose.connect('mongodb://root:mongoPassword@localhost:27017', { dbName: 'db' });
  } catch (e: any) {
    console.log(e.message);
  }
}
