import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const bikes = await prisma.bike.findMany({
      select: {
        userId: true,
        brand: true,
        model: true,
        components: true
      }
    });

    return NextResponse.json(bikes);
  } catch (error) {
    console.error('Error fetching bikes:', error);
    return NextResponse.json(
      { message: 'Error fetching bikes' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, brand, model } = body;

    if (!userId || !brand || !model) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const bike = await prisma.bike.create({
      data: {
        userId: Number(userId),
        brand,
        model
      }
    });

    return NextResponse.json(bike, { status: 201 });
  } catch (error) {
    console.error('Error adding bike:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
