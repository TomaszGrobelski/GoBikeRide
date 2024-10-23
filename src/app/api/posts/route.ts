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
        comments: {
          select: {
            id: true,
            content: true,
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

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { postId, description, imageUrl } = body;

    if (!postId) {
      return NextResponse.json(
        { message: 'Brakujące postId' },
        { status: 400 },
      );
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return NextResponse.json(
        { message: 'Post nie został znaleziony' },
        { status: 404 },
      );
    }

    if (!description && !imageUrl) {
      return NextResponse.json(
        { message: 'Nie przekazano danych do aktualizacji' },
        { status: 400 },
      );
    }

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        ...(description && { description }),
        ...(imageUrl && { imageUrl }),
      },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Wewnętrzny błąd serwera' },
      { status: 500 },
    );
  }
}
