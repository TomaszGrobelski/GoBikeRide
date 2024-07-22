const baseUrl = 'http://localhost:3000';

export const endpoints = {
  users: {
    all: `${baseUrl}/api/getUsers`,
  },
  user: {
    all: `${baseUrl}/api/users`,
  },
  bike: {
    all: `${baseUrl}/api/bikes`,
    components: {
      all: `${baseUrl}/api/bikes/components`,
    },
  },
  posts: {
    all: `${baseUrl}/api/posts`,
    like: `${baseUrl}/api/posts/like`,
  },
  session: {
    current: `${baseUrl}/api/session`,
  },
};
