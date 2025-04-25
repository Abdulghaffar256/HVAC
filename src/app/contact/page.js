// app/contact/page.js (or pages/contact.js depending on your folder structure)
"use client"; // Ensure this is the first line in the file

import React from "react";
import Link from "next/link";
import Head from 'next/head';

export default function Contact() {
  const faqs = [
    {
      question: "What courses does Epics Solution offer?",
      answer:
        "Epics Solution offers courses in HVAC design, Revit MEP, HVAC equipment, web development, AI, Python, Next.js, BMS systems, energy audits, and more.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll by contacting us via phone or email, or by visiting the course section on our website.",
    },
    {
      question: "Where is your company located?",
      answer: "We are based at Epics Solution, farimond house barking, UNITED KINGDOM, .",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center border-[1px] border-solid border-dark dark:border-light text-black dark:text-light min-h-screen px-4 sm:px-6 lg:px-8">
     <Head>
        <title>contact Us | Epic Solutions</title>
        <link rel="canonical" href="https://www.epicssolution.com/contact" />
      </Head> 
    <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {/* Company Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Epics Solution offers Online Courses & Informational Blogs
          </h2>
          <p className="text-base text-gray-600">
            Epic Solutions provides top-notch online blogs and courses in HVAC
            design, Revit MEP, HVAC equipment, web development, AI, Python,
            Next.js, BMS systems, energy audits, and more.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="text-lg space-y-2">
            <li>
              <strong>Phone: </strong>
              <a
                href="tel:+923325008560"
                className="text-blue-500 hover:underline"
              >
                0332-5008560
              </a>
            </li>
            <li>
              <strong>Email: </strong>
              <a
                href="mailto:abdulghaffar25600@epicssolution.com"
                className="text-blue-500 hover:underline"
              >
                abdulghaffar25600@epicssolution.com
              </a>
            </li>
            <li>
              <strong>Address: </strong>
              <span>Epics Solution, Your Address Here</span>
            </li>
          </ul>
        </section>

        {/* Google Maps Location */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
           <h1>farimond house barking, UNITED KINGDOM</h1>
          </div>
        </section>

      

        {/* FAQ Section */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium text-lg text-blue-600">
                  {faq.question}
                </h4>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
