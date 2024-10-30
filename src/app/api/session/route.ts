// 'use server';

// import { NextResponse } from 'next/server';

// import { createServerClient } from '@/lib/supabase/server-client';

// export async function GET() {
//   const supabase = createServerClient();

//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
//   }

//   return NextResponse.json({ user });
// }

'use server';

import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server-client';
import { NextRequest } from 'next/server'; // Importuj typ

export async function GET(req: NextRequest) { // Użyj typu NextRequest
  const supabase = createServerClient(req); // Przekazanie req do klienta

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Error fetching user:', error); // Log błędu
    return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
  }

  const { user } = data;

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json({ user });
}