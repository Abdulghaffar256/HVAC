'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `
        *[_type in ["AI", "Eng", "equipment", "development", "dev", "energy", "waste"]] | order(publishedAt desc)[0..8] {
          title,
          "slug": slug.current,
          "imageUrl": image.asset->url
        }
      `;
      const result = await client.fetch(query);
      setBlogs(result);
    };
    fetchBlogs().catch(console.error);
  }, []);

  return (
    <section className="py-20 text-center bg-[#F8F9FA] dark:bg-[#1E293B]">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Latest Blogs
      </h2>
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          className="mySwiper"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.slug}>
              <Link href={`/${blog.slug}`}>
                <Image
                  src={blog.imageUrl || 'https://www.epicssolution.com/default-banner.jpg'}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSlider;
