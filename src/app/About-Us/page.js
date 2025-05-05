"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <Head>
        <title>About Us | HVAC Designing</title>
        <link rel="canonical" href="https://www.hvacdesigning.com/about-us" />
      </Head>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center bg-blue-50 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          HVAC Designing’s company and culture are as unique as our services. We’re
          crafted, not cobbled, for a delightful learning experience.
        </p>
        <div className="mt-6">
          <Image
            src="/about/team-photo.jpg"
            alt="HVAC Team"
            width={600}
            height={350}
            className="mx-auto rounded-lg shadow border-4 border-blue-200 dark:border-blue-500"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900">
        <div>
          <Image
            src="/about/grow-better.jpg"
            alt="Grow Better"
            width={500}
            height={350}
            className="rounded-lg shadow border-4 border-blue-100 dark:border-blue-500"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">Our Mission</h2>
          <p>
            We exist to help HVAC engineers grow by improving their skills and staying
            updated with the latest in HVAC tech. When our learners grow, the whole
            industry benefits.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center bg-blue-50 dark:bg-gray-800">
        <div>
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">Our Story</h2>
          <p>
            Founded by a team of HVAC professionals and educators, HVAC Designing was
            born from a passion to simplify complex concepts and offer accessible,
            high-quality training to students and professionals worldwide.
          </p>
        </div>
        <div>
          <Image
            src="/about/our-story.jpg"
            alt="Our Story"
            width={500}
            height={350}
            className="rounded-lg shadow border-4 border-blue-100 dark:border-blue-500"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-10">HVAC Designing by the Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-2">12+ Global Offices</h3>
              <p><Link href="/locations" className="text-blue-600 hover:underline">Learn more</Link></p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-2">7,600+ Learners</h3>
              <p><Link href="/courses" className="text-blue-600 hover:underline">Explore courses</Link></p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-2">205,000+ Projects Supported</h3>
              <p><Link href="/projects" className="text-blue-600 hover:underline">See success stories</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center bg-blue-100 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Ready to Join Us?</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Join our growing HVAC community and elevate your design career today!</p>
        <Link
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
