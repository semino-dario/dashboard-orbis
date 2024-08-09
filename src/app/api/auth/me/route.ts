import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET!;

export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token missing' }, { status: 401 });
  }

  try {
    const payload = jwt.verify(token, secret);
    return NextResponse.json({ user: payload });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
