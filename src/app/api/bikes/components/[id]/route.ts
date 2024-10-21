import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const { id: componentId } = params;

  try {
    if (!componentId) {
      return NextResponse.json({ message: 'Missing id' }, { status: 400 });
    }

    const component = await prisma.component.findUnique({
      where: { id: Number(componentId) },
    });

    if (!component) {
      return NextResponse.json(
        { message: 'Component not found' },
        { status: 404 },
      );
    }

    const bikeId = component.bikeId; 

    await prisma.component.delete({
      where: { id: Number(componentId) },
    });

    await prisma.bike.update({
      where: { id: bikeId },
      data: { updateAt: new Date() }, 
    });

    return NextResponse.json({ message: 'Component deleted successfully' });
  } catch (error) {
    console.error('Error deleting component:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
