import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import * as z from 'zod';

import { db } from '@/lib/db';

const prisma = new PrismaClient();

const userSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    const existringUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existringUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message:
            'Użytkownik z tym adres emial już istnieję, proszę wybrać inny email',
        },
        { status: 409 },
      );
    }

    const existringUserByUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existringUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message:
            'Użytkownik z tą nazwą już istnieje, proszę zmienić nazwe użytkownika',
        },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: ' Użytkownik zostal stworzony pomyślnie',
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Coś poszło nie tak!, ${error}`,
      },
      { status: 500 },
    );
  }
}
