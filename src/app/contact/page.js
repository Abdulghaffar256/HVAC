"use client"; // Ensure this is the first line in the file

import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Contact() {
  const faqs = [
    {
      question: "What courses does HVAC Designing offer?",
      answer:
        "HVAC Designing offers courses in HVAC system design, Revit MEP, HVAC equipment fundamentals, building automation (BMS), energy audits, as well as beginner-friendly web development and Python programming.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll by contacting us via phone or email, or by visiting the course section on our website.",
    },
    {
      question: "Where is your company located?",
      answer: "We are based at Farimond House, Barking, United Kingdom.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center border-[1px] border-solid border-dark dark:border-light text-black dark:text-light min-h-screen px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Contact Us | HVAC Designing</title>
        <link rel="canonical" href="https://www.hvacdesigning.com/contact" />
      </Head>

      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {/* Company Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            HVAC Designing — Learn HVAC Systems the Smart Way
          </h2>
          <p className="text-base text-gray-600">
            HVAC Designing provides high-quality online courses and blog content
            covering HVAC design, Revit MEP, automation systems, energy efficiency,
            and beginner-friendly coding tutorials for the modern engineer.
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
                +92 332-5008560
              </a>
            </li>
            <li>
              <strong>Email: </strong>
              <a
                href="mailto:info@hvacdesigning.com"
                className="text-blue-500 hover:underline"
              >
                info@hvacdesigning.com
              </a>
            </li>
            <li>
              <strong>Address: </strong>
              <span>Farimond House, Barking, United Kingdom</span>
            </li>
          </ul>
        </section>

        {/* Google Maps Placeholder */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <p className="text-gray-600 p-4">
              You can find us at Farimond House, Barking, United Kingdom.
              (Map integration coming soon)
            </p>
          </div>
        </section>

        {/* AdSense Disclaimer */}
        <section className="mb-12 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold mb-2">Google Ad Disclosure</h3>
          <p className="text-sm text-gray-600">
            This site may display Google AdSense advertisements. These ads may use cookies and tracking
            technologies to serve you personalized content based on your interests and browsing behavior.
            You can opt out of personalized ads by visiting the{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Google Ad Settings
            </a>{" "}
            page.
          </p>
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
