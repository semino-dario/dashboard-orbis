import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../../user';

const secret = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
  console.log(token)
  return NextResponse.json({ token });
}
