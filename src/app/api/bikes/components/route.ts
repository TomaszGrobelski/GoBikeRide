import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      bikeId,
      name,
      maintenanceDate,
      currentState,
      currentMileageKm,
      maintenanceCost,
    } = body;

    if (
      !bikeId ||
      !name ||
      !maintenanceDate ||
      !currentState ||
      !currentMileageKm ||
      !maintenanceCost
    ) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 },
      );
    }

    const bike = await prisma.bike.findMany({
      where: { id: Number(bikeId) },
    });

    if (!bike || bike.length === 0) {
      return NextResponse.json({ message: 'Bike not found' }, { status: 404 });
    }

    const component = await prisma.component.create({
      data: {
        bikeId: Number(bikeId),
        name,
        maintenanceDate: new Date(maintenanceDate),
        currentState,
        currentMileageKm,
        maintenanceCost,
      },
    });

    return NextResponse.json(component, { status: 201 });
  } catch (error) {
    console.error('Error adding bike component:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
