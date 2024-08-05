import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        userId: true,
        description: true,
        imageUrl: true,
        createdAt: true,
        user: {
          select: {
            username: true,
          },
        },
        likes: {
          select: {
            id: true,
            userId: true,
            postId: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                username: true,
                avatar_url: true,
              },
            },
          },
        },
      },
      // comments: true,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { message: 'Błąd podczas pobierania postów' },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, description, imageUrl } = body;
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      return NextResponse.json(
        { message: 'Użytkownik nie zostal znaleziony' },
        { status: 400 },
      );
    }

    if (!userId || !description) {
      return NextResponse.json(
        { message: 'Brakuje wymaganych pól' },
        { status: 400 },
      );
    }

    const post = await prisma.post.create({
      data: {
        userId,
        description,
        imageUrl,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Wewnętrzny błąd serwera' },
      { status: 500 },
    );
  }
}
