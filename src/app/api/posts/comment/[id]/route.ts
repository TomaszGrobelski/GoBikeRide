import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
    const { id: commentId } = params;

    console.log(params);
    try {
        if (!commentId) {
            return NextResponse.json({ message: 'Missing commentId' }, { status: 400 });
        }

        const post = await prisma.comment.findUnique({
            where: { id: Number(commentId) },
        });

        if (!post) {
            return NextResponse.json({ message: 'Post not found' }, { status: 404 });
        }

        await prisma.comment.delete({
            where: { id: Number(commentId) },
        });

        return NextResponse.json({ message: 'Post deleted successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Internal server error', error }, { status: 500 });
    }
}
