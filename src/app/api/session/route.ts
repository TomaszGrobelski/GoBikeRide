'use server';

import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server-client';

export async function GET(req: NextRequest) {
  const supabase = createServerClient(req);

  // Najpierw spróbuj pobrać użytkownika
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Dodaj nagłówki CORS
  const responseHeaders = new Headers();
  responseHeaders.set(
    'Access-Control-Allow-Origin',
    'https://go-bike-ride-1eypllk8a-tomaszs-projects-594afce0.vercel.app',
  );
  responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Jeśli użytkownik nie jest zalogowany, zwróć błąd 401
  if (!user) {
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401, headers: responseHeaders } // Ustaw status 401 i nagłówki
    );
  }

  // Jeśli użytkownik jest zalogowany, zwróć obiekt użytkownika
  return NextResponse.json(
    { user },
    { headers: responseHeaders } // Ustaw tylko nagłówki
  );
}

// Opcjonalnie, jeśli potrzebujesz obsługi OPTIONS (np. dla preflight)
export async function OPTIONS(req: NextRequest) {
  const responseHeaders = new Headers();
  responseHeaders.set(
    'Access-Control-Allow-Origin',
    'https://go-bike-ride-1eypllk8a-tomaszs-projects-594afce0.vercel.app',
  );
  responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return NextResponse.json({}, { headers: responseHeaders }); // Zwróć pusty obiekt
}
