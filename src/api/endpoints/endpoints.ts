const baseUrl = 'http://localhost:3000';

export const endpoints = {
  users: {
    all: `${baseUrl}/api/getUsers`
  },
  bike: {
    all: `${baseUrl}/api/bikes`,
    components: {
      all: `${baseUrl}/api/bikes/components`
    }
  },
  posts: {
    all: `${baseUrl}/api/posts`
  },
  session: {
    current: `${baseUrl}/api/session`
  }
};
