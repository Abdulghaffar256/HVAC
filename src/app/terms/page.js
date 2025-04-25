"use client"
  import Head from 'next/head';

export default function TermsOfUse() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>Terms of Use | Epic Solutions</title>
        <link rel="canonical" href="https://www.epicssolution.com/terms" />
      </Head>
<main className="p-6 max-w-4xl mx-auto bg-light dark:bg-dark text-black dark:text-light transition-all border-solid border-dark dark:border-light">        <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
        <p className="mb-8">
          Please read these terms and conditions carefully before using{' '}
          <a href="https://www.epicssolution.com/" className="text-blue-500">
            https://www.epicssolution.com/
          </a>{' '}
          website.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conditions of Use</h2>
          <p>
            By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly. Epics Solution only grants use and access of this website, its products, and its services to those who have accepted its terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p>
            Before you continue using our website, we advise you to read ur privacy policy regarding our user data collection. It will help you better understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Age Restriction</h2>
          <p>
            You must be at least 13 (Thirteen) years of age before you can use this website. By using this website, you warrant that you are at least 13 years of age and you may legally adhere to this agreement. Epics Solution assumes no responsibility for liabilities related to age misrepresentation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p>
            You agree that all materials, products, and services provided on this website are the property of Epics Solution, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the Epics Solution’s intellectual property in any way, including electronic, digital, or new trademark registrations. You grant Epics Solutions a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation on Liability</h2>
          <p>
            Epics Solution is not liable for any damages that may occur to you as a result of your misuse of our website. Epics Solution reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between Epics Solution and the user, and this supersedes and replaces all prior agreements regarding the use of this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Epics Solution, its affiliates, directors, officers, employees, agents, suppliers, and licensors from and against all claims, damages, and expenses arising from:
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
            This Agreement shall be governed by and construed in accordance with the law. Any disputes arising out of or related to this Agreement shall be resolved through binding arbitration in accordance with the rules of the [Arbitration Association], as amended from time to time.
          </p>
        </section>
      </main>
    </div>
  );
}
