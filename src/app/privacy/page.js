
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Epics Solution</title>
      </Head>
      <div className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Epics Solution, we are committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, and protect personal information about you when you visit our website.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              We are Epics Solution, a leading software house specializing in custom software, web and mobile app development, and AI-driven solutions related to energy and MEP. We also educate people through blogs and free courses . We turn ideas into powerful digital products with innovation and expertise.. We are committed to protecting the privacy and security of our users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Collection</h2>
            <p className="text-gray-600 leading-relaxed mb-2">We collect personal information about you when you visit our website, including:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Your IP address and browser type</li>
              <li>Your name and email address when you contact us through our contact form</li>
              <li>Cookies and other tracking technologies to improve your browsing experience and provide personalized content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Use of Personal Information</h2>
            <p className="text-gray-600 leading-relaxed mb-2">We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve and personalize your browsing experience on our website</li>
              <li>To send you newsletters and promotional emails about our products and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 leading-relaxed">
             We use cookies and other tracking technologies to improve your browsing experience and provide personalized content. We obtain your consent for non-essential cookies through [describe your consent mechanism, e.g., a cookie banner or opt-in form].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
             We may transfer your personal information across borders to our affiliates, service providers, or other third parties. We ensure that all international data transfers are done in accordance with applicable laws and regulations, including the EU's General Data Protection Regulation (GDPR). We use standard contractual clauses approved by the European Commission to ensure that your personal information is protected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Protection and Security</h2>
            <p className="text-gray-600 leading-relaxed mb-2">We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Using secure socket layer (SSL) encryption to protect data transmitted between your browser and our website</li>
              <li>Implementing access controls and password protection to restrict access to your personal information</li>
              <li>Regularly monitoring our website for security breaches and vulnerabilities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-2">You have the following rights:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>To access and correct your personal information</li>
              <li>To object to our processing of your personal information</li>
              <li>To request deletion of your personal information</li>
              <li>To request restriction of our processing of your personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Compliance with EU Regulations</h2>
            <p className="text-gray-600 leading-relaxed">
              We comply with the EU's General Data Protection Regulation (GDPR) and other relevant EU regulations. We ensure that our processing of personal information is done in accordance with the principles of transparency, fairness, and lawfulness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify or update this Privacy Policy at any time without prior notice. Your continued use of our website after any changes to this Privacy Policy will constitute your acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
              <a href="mailto:abdulghaffar25600@epicssolution.com" className="text-blue-600 hover:underline">
                abdulghaffar25600@epicssolution.com
              </a>.
            </p>
          </section>

          <p className="text-gray-600 leading-relaxed mt-6">
            By using our website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>
          <p className="text-gray-500 text-sm mt-4">Last Updated: 02-04-2025</p>
        </div>
      </div>
    </>
  );
}
