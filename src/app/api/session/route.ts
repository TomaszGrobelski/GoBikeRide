'use server';

import { NextRequest, NextResponse } from 'next/server';

import { createServerClient } from '@/lib/supabase/server-client';

export async function GET(req: NextRequest) {
  const supabase = createServerClient(req);

  // Dodaj nagłówek CORS
  const response = NextResponse.json({}); // Zwróć pusty obiekt lub cokolwiek, co chcesz
  response.headers.set(
    'Access-Control-Allow-Origin',
    'https://go-bike-ride-1eypllk8a-tomaszs-projects-594afce0.vercel.app',
  ); // Dodaj konkretny origin
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Dozwolone metody
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Dozwolone nagłówki

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json({ user });
}
