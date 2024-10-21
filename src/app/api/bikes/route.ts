import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { message: 'Missing userId parameter' },
        { status: 400 },
      );
    }

    const bikes = await prisma.bike.findMany({
      where: {
        userId: String(userId),
      },
      select: {
        id: true,
        userId: true,
        brand: true,
        model: true,
        components: true,
      },
      orderBy: {
        updateAt: 'desc',
      },
    });

    return NextResponse.json(bikes);
  } catch (error) {
    console.error('Error fetching bikes:', error);
    return NextResponse.json(
      { message: 'Error fetching bikes' },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, brand, model, addDefaultComponents } = body;

    if (!userId || !brand || !model) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 },
      );
    }

    const bikeCount = await prisma.bike.count({
      where: { userId: String(userId) },
    });

    if (bikeCount >= 3) {
      return NextResponse.json(
        { message: 'You cannot add more than 3 bikes.' },
        { status: 403 },
      );
    }

    const bike = await prisma.bike.create({
      data: {
        userId: String(userId),
        brand,
        model,
      },
    });

    if (addDefaultComponents) {
      const defaultComponents = [
        {
          name: 'Łańcuch',
          maintenanceDate: new Date(),
          currentState: 'Dobry',
          currentMileageKm: 0,
          maintenanceCost: 0,
        },
        {
          name: 'Kaseta',
          maintenanceDate: new Date(),
          currentState: 'Dobry',
          currentMileageKm: 0,
          maintenanceCost: 0,
        },
        {
          name: 'Korba',
          maintenanceDate: new Date(),
          currentState: 'Dobry',
          currentMileageKm: 0,
          maintenanceCost: 0,
        },
        {
          name: 'Linka i pancerz przerzutek',
          maintenanceDate: new Date(),
          currentState: 'Dobry',
          currentMileageKm: 0,
          maintenanceCost: 0,
        },
        {
          name: 'Linka i pancerz hamulców',
          maintenanceDate: new Date(),
          currentState: 'Dobry',
          currentMileageKm: 0,
          maintenanceCost: 0,
        },
        {
          name: 'Hamulce',
          maintenanceDate: new Date(),
          currentState: 'Dobry',
          currentMileageKm: 0,
          maintenanceCost: 0,
        },
        {
          name: 'Opony',
          maintenanceDate: new Date(),
          currentState: 'Dobry',
          currentMileageKm: 0,
          maintenanceCost: 0,
        },
      ];

      const componentPromises = defaultComponents.map((component) =>
        prisma.component.create({
          data: {
            bikeId: bike.id,
            name: component.name,
            maintenanceDate: component.maintenanceDate,
            currentState: component.currentState,
            currentMileageKm: component.currentMileageKm,
            maintenanceCost: component.maintenanceCost,
          },
        }),
      );

      await Promise.all(componentPromises);
    }

    return NextResponse.json(bike, { status: 201 });
  } catch (error) {
    console.error('Error adding bike:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
