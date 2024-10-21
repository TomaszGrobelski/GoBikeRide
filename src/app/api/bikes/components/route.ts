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

    await prisma.bike.update({
      where: { id: Number(bikeId) },
      data: { updateAt: new Date() }, 
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

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      componentId,
      bikeId,
      name,
      maintenanceDate,
      currentState,
      currentMileageKm,
      maintenanceCost,
    } = body;

    if (!componentId) {
      return NextResponse.json(
        { message: 'Missing componentId' },
        { status: 400 },
      );
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

    const updatedComponent = await prisma.component.update({
      where: { id: Number(componentId) },
      data: {
        name: name || component.name, 
        maintenanceDate: maintenanceDate
          ? new Date(maintenanceDate)
          : component.maintenanceDate,
        currentState: currentState || component.currentState,
        currentMileageKm: currentMileageKm || component.currentMileageKm,
        maintenanceCost: maintenanceCost || component.maintenanceCost,
      },
    });

    await prisma.bike.update({
      where: { id: Number(bikeId) },
      data: { updateAt: new Date() }, 
    });


    return NextResponse.json(updatedComponent, { status: 200 });
  } catch (error) {
    console.error('Error updating component:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
