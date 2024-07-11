import { NextRequest, NextResponse } from 'next/server';

export async function authRedirectMiddleware(request: NextRequest) {
  const authToken = request.cookies.get('sb-zzntmujpyfyxzfyqwerd-auth-token');
  const googleAuthToken = request.cookies.get('sb-access-token');
  console.log(authToken);
  console.log(googleAuthToken);

  if (
    (authToken || googleAuthToken) &&
    (request.nextUrl.pathname.startsWith('/auth/sign-in') ||
      request.nextUrl.pathname.startsWith('/auth/sign-up'))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard/hero';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
