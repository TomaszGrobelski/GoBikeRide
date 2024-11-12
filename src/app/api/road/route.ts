import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const trails = await prisma.trail.findMany();

        return NextResponse.json(trails);
    } catch (error) {
        console.error('Error fetching trails:', error);
        return NextResponse.json({ message: 'Error fetching trails' }, { status: 500 });
    }
}
