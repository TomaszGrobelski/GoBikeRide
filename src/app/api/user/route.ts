import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import * as z from 'zod';

import { db } from '@/lib/db';

const userSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters')
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    const existringUserByEmail = await db.user.findUnique({
      where: { email: email }
    });

    if (existringUserByEmail) {
      return NextResponse.json(
        { user: null, message: 'User with this email already exisst' },
        { status: 409 }
      );
    }

    const existringUserByUsername = await db.user.findUnique({
      where: { username: username }
    });

    if (existringUserByUsername) {
      return NextResponse.json(
        { user: null, message: 'User with this username already exisst' },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: ' User created successfuly'
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Something went wrong!, ${error}`
      },
      { status: 500 }
    );
  }
}
