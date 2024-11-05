import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const userId = params.id;

    if (!userId) {
        return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    try {
        const notifications = await prisma.notification.findMany({
            where: {
                userId: userId,
                isRead: false,
            },
            select: {
                id: true,
                sender: {
                    select: {
                        username: true,
                    },
                },
                type: true,
                message: true,
                createdAt: true,
                isRead: true,
            },
        });

        return NextResponse.json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id: notificationId } = params;
    console.log(typeof notificationId);
    
    if (!notificationId) {
        return NextResponse.json({ error: 'Invalid notification ID' }, { status: 400 });
    }

    try {
        const notification = await prisma.notification.findUnique({
            where: { id: parseInt(notificationId) },
        });

        if (!notification) {
            return NextResponse.json({ error: 'Notification not found' }, { status: 404 });
        }

        await prisma.notification.delete({
            where: { id: parseInt(notificationId) },
        });

        return NextResponse.json({ message: 'Notification deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting notification:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
