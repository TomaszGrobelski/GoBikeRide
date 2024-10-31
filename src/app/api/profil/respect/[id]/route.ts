import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    if (!id) {
      return NextResponse.json({ message: 'Missing userId...' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: String(id) },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const body = await request.json();
    const { giverId, action } = body;

    if (action !== 'increment' && action !== 'decrement') {
      return NextResponse.json({ message: 'Invalid action. Use "increment" or "decrement"' }, { status: 400 });
    }

    if (action === 'increment') {
      const existingRespect = await prisma.respect.findUnique({
        where: {
          giverId_receiverId: {
            giverId,
            receiverId: user.id,
          },
        },
      });

      if (existingRespect) {
        return NextResponse.json({ message: 'This user has already given respect to this receiver.' }, { status: 400 });
      }

      const newRespect = user.respect + 1;

      await prisma.respect.create({
        data: {
          giverId,
          receiverId: user.id,
        },
      });

      await prisma.user.update({
        where: { id: user.id },
        data: {
          respect: newRespect,
        },
      });

      return NextResponse.json({
        message: 'Respect updated successfully',
        respect: newRespect,
      });
    } else if (action === 'decrement') {
      const newRespect = Math.max(user.respect - 1, 0);

      await prisma.respect.deleteMany({
        where: {
          giverId,
          receiverId: user.id,
        },
      });

      await prisma.user.update({
        where: { id: user.id },
        data: {
          respect: newRespect,
        },
      });

      return NextResponse.json({
        message: 'Respect decreased successfully',
        respect: newRespect,
      });
    }
  } catch (error) {
    console.error('Error updating respect:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
