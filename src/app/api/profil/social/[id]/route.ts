import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;  

  try {
    if (!id) {
      return NextResponse.json({ message: 'Missing userId' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: String(id) },
      include: { socialMedia: true },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const body = await request.json();
    const { instagram, facebook, twitter } = body;

    if (!instagram && !facebook && !twitter) {
      return NextResponse.json(
        { message: 'No social media links provided' },
        { status: 400 },
      );
    }

    const updatedSocialMedia = await prisma.socialMedia.upsert({
      where: { userId: user.id },
      update: {
        instagram: instagram || user.socialMedia?.instagram,
        facebook: facebook || user.socialMedia?.facebook,
        twitter: twitter || user.socialMedia?.twitter,
      },
      create: {
        userId: user.id,
        instagram,
        facebook,
        twitter,
      },
    });

    return NextResponse.json({
      message: 'Social media updated successfully',
      socialMedia: updatedSocialMedia,
    });
  } catch (error) {
    console.error('Error updating social media:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
