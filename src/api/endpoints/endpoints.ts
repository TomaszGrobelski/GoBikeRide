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
  blog: {
    all: `${baseUrl}/api/blog`
  }
};
