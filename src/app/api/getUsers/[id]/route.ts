import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        username: true,
        createdAt: true,
        posts_count: true,
        routes_count: true,
        bikes_count: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { message: 'Error fetching user' },
      { status: 500 },
    );
  }
}
