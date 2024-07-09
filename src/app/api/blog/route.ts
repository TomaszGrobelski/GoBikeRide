import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

import { supabase } from '@/lib/supabase';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, description, imageFile } = body;

    if (!userId || !description || !imageFile) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Upload image to Supabase
    const fileName = `${userId}-${Date.now()}-${imageFile.name}`;
    const { data, error } = await supabase.storage
      .from('your-bucket-name')
      .upload(fileName, imageFile);

    if (error) {
      throw error;
    }

    const { data: publicUrlData } = supabase.storage
      .from('your-bucket-name')
      .getPublicUrl(data.path);

    const publicUrl = publicUrlData.publicUrl;
    // Save post to database

    const post = await prisma.post.create({
      data: {
        userId: Number(userId),
        description,
        imageUrl: publicUrl // Assuming your Post model has a `url` field to store the image URL
      }
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error adding post:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
