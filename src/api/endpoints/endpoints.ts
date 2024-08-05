const baseUrl = 'http://localhost:3000/api';

export const endpoints = {
  users: {
    all: `${baseUrl}/getUsers`,
  },
  user: {
    all: `${baseUrl}/users`,
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
};
