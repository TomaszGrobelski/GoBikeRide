'use server';

import { NextRequest, NextResponse } from 'next/server';

import { createServerClient } from '@/lib/supabase/server-client';

export async function GET(req: NextRequest) {
  const supabase = createServerClient(req);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json({ user });
}
