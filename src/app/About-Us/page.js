"use client";
import Head from 'next/head';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-light dark:bg-dark text-black dark:text-light transition-all border-solid border-dark dark:border-light">
      <Head>
        <title>About Us | HVAC Designing</title>
        <link rel="canonical" href="https://www.hvacdesigning.com/about-us" />
      </Head>
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to HVAC Designing</h2>
          <p>Welcome to HVAC Designing! We are a team of experienced HVAC professionals dedicated to providing top-notch education and resources in HVAC design.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>Our team consists of seasoned HVAC engineers and designers with years of experience in the industry. We bring a wealth of knowledge and practical expertise to our courses and resources.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p>At HVAC Designing, we offer comprehensive online courses, certifications, and access to cutting-edge HVAC software solutions. Our content is designed to be accessible and informative, helping you to master HVAC design principles and practices. Our software tools are designed to help you streamline your design processes, improve efficiency, and achieve optimal results in your HVAC projects.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>Our goal is to empower HVAC professionals, students, and enthusiasts by providing them with the knowledge and tools they need to excel in the field of HVAC design. We are committed to making high-quality HVAC education accessible to everyone.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p>At HVAC Designing, we value:</p>
          <ul className="list-disc list-inside">
            <li><strong>Excellence:</strong> We strive to provide the highest quality education and resources.</li>
            <li><strong>Accessibility:</strong> We believe that everyone should have access to learning opportunities.</li>
            <li><strong>Innovation:</strong> We stay up-to-date with the latest trends and technologies in HVAC design.</li>
            <li><strong>Community:</strong> We foster a supportive community of learners and professionals.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Serve</h2>
          <p>Our resources are designed for:</p>
          <ul className="list-disc list-inside">
            <li>HVAC professionals looking to enhance their skills</li>
            <li>Students pursuing careers in HVAC design</li>
            <li>Enthusiasts interested in learning about HVAC systems</li>
            <li>Companies seeking to train their employees in HVAC design</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Transparency and Policies</h2>
          <p>We are committed to transparency and accountability. You can find our:</p>
          <ul className="list-disc list-inside">
            <li><Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="text-blue-500 hover:underline">Disclaimer</Link></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions or concerns, please don’t hesitate to contact us at <Link href="/contact" className="text-blue-500 hover:underline">our contact page</Link>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p>With HVAC Designing, you can enhance your HVAC design skills, stay updated with the latest industry trends, and advance your career. Join us on this journey of learning and discover the world of HVAC design!</p>
        </section>

        <section className="mb-8">
          <p>By using our website, you agree to our Terms of Service and Privacy Policy. We reserve the right to modify our policies at any time, and your continued use of our website will be deemed acceptance of those changes.</p>
        </section>
      </main>
    </div>
  );
}
