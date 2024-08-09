import { NextResponse } from 'next/server';
import { MongoClient, Collection, Db } from 'mongodb';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../../user';

interface User {
    email: string;
    password: string;
  }

  let client: MongoClient | null = null;
  let db: Db | null = null;
  let collection: Collection<User> | null = null;

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.DB_URI!);
    await client.connect();
    db = client.db('orbis');
    collection = db.collection<User>('user');
  }
}

export async function POST(req: Request) {
  
  await connectToDatabase();
  
  if (!collection) {
    console.error('Collection is not initialized');
    return NextResponse.json({ error: 'Failed to connect to database' }, { status: 500 });
  }

    const { email, password } = await req.json() as User;
    const existingUser = await getUserByEmail(email);
    try {
  
      if (existingUser) {
        return NextResponse.json({ error: 'User already exists' }, { status: 409 });
      }
  
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newUser = { email, password: hashedPassword };
      await collection!.insertOne(newUser);
  
      return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
      console.error('Error registering user:', error);
      return NextResponse.json({ error: 'Failed to register user' }, { status: 500 });
    } 
  }