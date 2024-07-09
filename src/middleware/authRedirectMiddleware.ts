import { NextResponse, type NextRequest } from 'next/server';
import Cookies from 'js-cookie';


// DOKOŃCZYĆ, żeby działało jak trzeba !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export async function authRedirectMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl; 

  if (!pathname.startsWith('/auth/sign-in') && !pathname.startsWith('/auth')) {
    const authToken = Cookies.get('sb-zzntmujpyfyxzfyqwerd-auth-token');

    if (authToken) {
      return NextResponse.redirect('/dashboard/hero');
    }
  }

  return NextResponse.next({ request });
}
