import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const PostsList = () => {
  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     const fetchImages = async () => {
  //       const { data, error } = await supabase.storage
  //         .from('your-bucket-name')
  //         .list('public', {
  //           limit: 100, // Zmień limit na odpowiednią wartość
  //           offset: 0,
  //           sortBy: { column: 'name', order: 'asc' }
  //         });

  //       if (error) {
  //         console.error('Error fetching images:', error);
  //         return;
  //       }

  //       const urls = await Promise.all(
  //         data.map(async (file) => {
  //           const { publicUrl } = supabase.storage
  //             .from('your-bucket-name')
  //             .getPublicUrl(`public/${file.name}`);

  //           return publicUrl;
  //         })
  //       );

  //       setImages(urls);
  //     };

  //     fetchImages();
  //   }, []);

  return (
    <div>
      {/* {images.map((url, index) => ( */}
      <div >
        <Image
          src='https://zzntmujpyfyxzfyqwerd.supabase.co/storage/v1/object/public/Blog/Zalew_buczyna.jpg'
          alt={`Image`}
          width={100}
          height={100}
        />
      </div>
      {/* ))} */}
    </div>
  );
};

export default PostsList;
