// const baseUrl = 'http://localhost:3000/api';
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const endpoints = {
  users: {
    all: `${baseUrl}/getUsers`,
  },
  user: {
    all: `${baseUrl}/users`,
    social: {
      all: `${baseUrl}/users/social`,
      update: `${baseUrl}/users/social/update`,
    },
  },
  bike: {
    all: `${baseUrl}/bikes`,
    components: {
      all: `${baseUrl}/bikes/components`,
    },
  },
  posts: {
    all: `${baseUrl}/posts`,
    like: `${baseUrl}/posts/like`,
    comment: `${baseUrl}/posts/comment`,
  },
  session: {
    current: `${baseUrl}/session`,
  },
  profil: {
    social: `${baseUrl}/profil/social/`,
    respect: `${baseUrl}/profil/respect/`, 
    delete: `${baseUrl}/profil/delete/`, 
  },
};
