import {  Collection, Db, MongoClient } from 'mongodb';


export interface User {
  _id?: string;
  email: string;
  password: string; 
  [key: string]: any; // Para permitir otros campos dinámicos
}

let client: MongoClient;
let db: Db;
let collection: Collection<User>;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.DB_URI!);
    await client.connect();
    db = client.db('orbis');
    collection = db.collection<User>('user');
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    await connectToDatabase();
    const user = await collection.findOne({ email });
    return user;
  } catch (error) {
    console.error('Error getting user by email:', error);
    throw new Error('Error getting user by email');
  } 
}