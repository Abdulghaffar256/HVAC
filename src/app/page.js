'use client';


import BlogSection from '@/components/blog/page';
import HomeComponent from '@/components/Homecomponent/page';
import BlogSlider from '@/components/ALL/page';

const Home = () => {
  return (
    <>
    <HomeComponent />

    <section >
    {/* Services Section */}
    <div><BlogSlider /></div>
      </section>


      {/* Blog Section */}
      <BlogSection />
    </>
  );
};

export default Home;
