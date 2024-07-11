import { type NextRequest } from 'next/server';

import { authRedirectMiddleware } from './middleware/authRedirectMiddleware';
import { updateSession } from './middleware/updateSessionMiddleware';

export async function middleware(request: NextRequest) {
  let response = await updateSession(request);

  if (response.headers.get('location')) {
    //Nagłówek location jest używany do przekierowań HTTP. Jeśli jest obecny, oznacza to, że updateSession chce przekierować użytkownika na inną stronę. i kończy działanie return.
    return response;
  }

  response = await authRedirectMiddleware(request);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};
