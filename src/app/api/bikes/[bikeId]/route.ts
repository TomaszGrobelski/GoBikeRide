import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { bikeId: number } },
) {
  const { bikeId } = params;
  try {
    if (!bikeId) {
      return NextResponse.json({ message: 'Missing bikeId' }, { status: 400 });
    }

    const bike = await prisma.bike.findUnique({
      where: { id: Number(bikeId) },
    });

    if (!bike) {
      return NextResponse.json({ message: 'Bike not found' }, { status: 404 });
    }

    await prisma.bike.delete({
      where: { id: Number(bikeId) },
    });

    return NextResponse.json({ message: 'Bike deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
