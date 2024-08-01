const BASE_PATHS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard'
};

export const paths = {
  root: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  auth: {
    root: BASE_PATHS.AUTH,
    signIn: `${BASE_PATHS.AUTH}/sign-in`,
    signUp: `${BASE_PATHS.AUTH}/sign-up`
  },
  dashboard: {
    root: BASE_PATHS.DASHBOARD,
    home: `${BASE_PATHS.DASHBOARD}/hero`,
    bike: `${BASE_PATHS.DASHBOARD}/bike`,
    routes: `${BASE_PATHS.DASHBOARD}/road`,
    posts: `${BASE_PATHS.DASHBOARD}/posts`,
    users: `${BASE_PATHS.DASHBOARD}/users`,
    contact: `${BASE_PATHS.DASHBOARD}/contact`,
    premium: `${BASE_PATHS.DASHBOARD}/premium`
  }
};
