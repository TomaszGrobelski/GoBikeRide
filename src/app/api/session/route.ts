'use server';

import { NextRequest, NextResponse } from 'next/server';

import { createServerClient } from '@/lib/supabase/server-client';

export async function GET(req: NextRequest) {
  const supabase = createServerClient(req);

  const {
    data: { user },
    error
  } = await supabase.auth.getUser();

  if (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json({ user });
}