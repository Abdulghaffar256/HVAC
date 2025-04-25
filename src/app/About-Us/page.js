"use client";
import Head from 'next/head';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-light dark:bg-dark text-black dark:text-light transition-all border-solid border-dark dark:border-light">
      <Head>
        <title>About Us | Epic Solutions</title>
        <link rel="canonical" href="https://www.epicssolution.com/About-Us" />
      </Head>
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <section className="mb-8">
          <p>
            Welcome to Epic Solutions! We are a team of dedicated professionals passionate about making learning easy and enjoyable for everyone. Our team consists of experienced experts in various fields, including HVAC design, Revit MEP, web development, AI, and more.
          </p>
        </section>

        <section className="mb-8">
          <p>
            At Epic Solutions, we offer online blogs and courses on a variety of topics, carefully crafted to provide valuable knowledge and skills. Whether you are a beginner or a professional, our content is created with simple and clear language to help you understand quickly.
          </p>
        </section>

        <section className="mb-8">
          <p>
            Our goal is to empower students, workers, and anyone curious about learning new skills. We believe that knowledge should be available to all, and we strive to make our resources easy to access.
          </p>
        </section>

        <section className="mb-8">
          <p>We are committed to transparency and accountability. You can find our:</p>
          <ul className="list-disc list-inside">
            <li>
              <Link href="/privacy" className="text-blue-500 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-blue-500 hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-blue-500 hover:underline">
                Disclaimer
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <p>
            We take pride in providing high-quality content and services. If you have any questions or concerns, please don’t hesitate to contact us at{' '}
            <Link href="/contact" className="text-blue-500 hover:underline">
              our contact page
            </Link>.
          </p>
        </section>

        <section className="mb-8">
          <p>
            With Epic Solutions, you can grow your skills, explore new opportunities, and achieve your goals. Join us on this journey of learning and discover how simple it is to gain valuable knowledge!
          </p>
        </section>

        <section className="mb-8">
          <p>
            By using our website, you agree to our Terms of Service and Privacy Policy. We reserve the right to modify our policies at any time, and your continued use of our website will be deemed acceptance of those changes.
          </p>
        </section>
      </main>
    </div>
  );
}
