import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import { Post } from '@/types/Blog/blog.types';

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/blog'); // Endpoint do pobierania postów
        setPosts(response.data); // Ustawienie pobranych postów w stanie
        console.log(response);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Image
            src={post.imageUrl}
            // src='https://zzntmujpyfyxzfyqwerd.supabase.co/storage/v1/object/public/Blog/3c22369d-66ba-4011-b383-508b8cf7976c/sz.jpg'
            alt={`Post ${post.id}`}
            width={100}
            height={100}
          />
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
