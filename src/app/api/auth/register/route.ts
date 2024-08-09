import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { connectToDatabase, getUserByEmail } from '../../user';

interface User {
    email: string;
    password: string;
  }

export async function POST(req: Request) {
 const {collection } =   await connectToDatabase();
  
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