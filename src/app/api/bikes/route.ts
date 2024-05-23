import { NextApiRequest, NextApiResponse } from 'next';
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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req);
    console.log(req.body);
    const { userId: addUserId, brand, model } = req.body;
    console.log(brand, addUserId, model);
    if (!addUserId || !brand || !model) {
      return NextResponse.json({ message: 'Missing required fields' });
    }

    const bike = await prisma.bike.create({
      data: {
        userId: Number(addUserId),
        brand,
        model
      }
    });
    console.log(bike);

    // const bike = await prisma.bike.create({
    //   data: {
    //     userId: Number(19),
    //     brand: 'inny',
    //     model: 'ten'
    //   }
    // });

    return NextResponse.json(bike);
  } catch (error) {
    console.error('Error adding bike:', error);
    return NextResponse.json({ message: 'Internal server error' });
  }
}
