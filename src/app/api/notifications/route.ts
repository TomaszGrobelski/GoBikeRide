import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userId, senderId, type, message, postId } = body;

        const userExists = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!userExists) {
            return NextResponse.json({ message: 'User not found' }, { status: 400 });
        }


        const existingNotification = await prisma.notification.findFirst({
            where: {
                userId,
                senderId,
                type,
                message,
                postId,
                isRead: false, 
            },
        });

        if (existingNotification) {
            return NextResponse.json({ message: 'Notification already exists' }, { status: 400 });
        }

        const notification = await prisma.notification.create({
            data: {
                userId,
                senderId,
                type,
                message,
                postId,
                isRead: false,
            },
        });

        return NextResponse.json({ message: 'Notification created', notification }, { status: 201 });
    } catch (error) {
        console.error('Error creating notification:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
