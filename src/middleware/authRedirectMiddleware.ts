import { NextRequest, NextResponse } from 'next/server';
import { paths } from '@/routes/paths';

export async function authRedirectMiddleware(request: NextRequest) {
  const authToken = request.cookies.get('sb-zzntmujpyfyxzfyqwerd-auth-token');
  const googleAuthToken = request.cookies.get('sb-access-token');

  if (
    (authToken || googleAuthToken) &&
    (request.nextUrl.pathname.startsWith(paths.auth.signIn) ||
      request.nextUrl.pathname.startsWith(paths.auth.signUp))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = paths.dashboard.home;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
