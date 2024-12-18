import { NextResponse, type NextRequest } from 'next/server';
import { paths } from '@/routes/paths';
import { createServerClient } from '@supabase/ssr';

const SESSION_CHECK_INTERVAL = 300000;
let lastCheck = Date.now();

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  if (Date.now() - lastCheck < SESSION_CHECK_INTERVAL) {
    return supabaseResponse;
  }

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_KEY!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    !user &&
    !request.nextUrl.pathname.startsWith(paths.auth.signIn) &&
    !request.nextUrl.pathname.startsWith(paths.auth.root)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = paths.auth.signIn;

    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
