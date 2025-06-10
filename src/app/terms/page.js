"use client";
import Head from 'next/head';

export default function TermsOfUse() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>Terms of Use | HVAC Designing</title>
        <link rel="canonical" href="https://www.hvacdesigning.com/terms" />
      </Head>

      <main className="p-6 max-w-4xl mx-auto bg-light dark:bg-dark text-black dark:text-light transition-all border-solid border-dark dark:border-light">
        <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
        <p className="mb-8">
          Please read these terms and conditions carefully before using{' '}
          <a href="https://www.hvacdesigning.com/" className="text-blue-500">
            https://www.hvacdesigning.com/
          </a>{' '}
          website.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conditions of Use</h2>
          <p>
            By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly. HVAC Designing only grants use and access of this website, its products, and its services to those who have accepted its terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p>
            Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Age Restriction</h2>
          <p>
            You must be at least 13 (Thirteen) years of age before you can use this website. By using this website, you warrant that you are at least 13 years of age and you may legally adhere to this agreement. HVAC Designing assumes no responsibility for liabilities related to age misrepresentation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
          <p>
            HVAC Designing does not knowingly collect or store any personal information from children under the age of 13. If we discover that a child under 13 has provided us with personal information, we will delete such data immediately to comply with COPPA and Google AdSense child-safety guidelines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Google AdSense & Third-Party Ads</h2>
          <p>
            This website uses Google AdSense and may show advertisements provided by third-party vendors. These vendors, including Google, may use cookies or similar technologies to serve ads based on your prior visits to this and other websites.
          </p>
          <p className="mt-2">
            You can opt out of personalized ads by visiting the{' '}
            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Google Ad Settings
            </a>{' '}
            page or the{' '}
            <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              AboutAds.info
            </a>{' '}
            consumer choice page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Content and Comments</h2>
          <p>
            HVAC Designing may provide areas for users to post content, such as comments or feedback. You are responsible for the content you post and agree not to upload anything offensive, illegal, or spammy. We reserve the right to moderate, edit, or remove any content at our discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p>
            You agree that all materials, products, and services provided on this website are the property of HVAC Designing, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree not to reproduce or redistribute HVAC Designing’s intellectual property in any way without permission. You grant HVAC Designing a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation on Liability</h2>
          <p>
            HVAC Designing is not liable for any damages that may occur to you as a result of your misuse of our website. HVAC Designing reserves the right to edit, modify, and change this Agreement at any time. We shall inform users of major changes via email or website notice. This Agreement supersedes all prior terms related to the use of this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless HVAC Designing, its affiliates, directors, officers, employees, agents, suppliers, and licensors from and against all claims, damages, and expenses arising from:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Your breach of this Agreement</li>
            <li>Your misuse of our website</li>
            <li>Your violation of any law or third-party rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of your country or jurisdiction, unless otherwise specified. Any disputes shall be resolved through binding arbitration as per applicable laws and arbitration rules.
          </p>
        </section>
      </main>
    </div>
  );
}
