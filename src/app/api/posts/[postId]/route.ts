import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { postId: number } },
) {
  const { postId } = params;
  try {
    if (!postId) {
      return NextResponse.json({ message: 'Missing postId' }, { status: 400 });
    }

    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    await prisma.post.delete({
      where: { id: Number(postId) },
    });

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
