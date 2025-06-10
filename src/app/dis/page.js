import { Metadata } from 'next';
import Head from 'next/head';

export const metadata = {
  title: 'Disclaimer | HVAC Designing',
};

export default function Disclaimer() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-light dark:bg-dark text-black dark:text-light transition-all border-solid border-dark dark:border-light">
      <Head>
        <title>Disclaimer | HVAC Designing</title>
        <link rel="canonical" href="https://www.hvacdesigning.com/disclaimer" />
      </Head>
      <main className="p-6 max-w-4xl mx-auto bg-light dark:bg-dark text-dark dark:text-light transition-all">
        <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="mb-8">
          Please read this disclaimer carefully before using{' '}
          <a href="https://www.hvacdesigning.com/" className="text-blue-500">
            https://www.hvacdesigning.com/
          </a>{' '}
          website.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">General Disclaimer</h2>
          <p>
            The information contained in this website is for general information purposes only. The information is provided by HVAC Designing and while we strive to keep the content accurate and up-to-date, we make no warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, services, or related content for any purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            In no event shall HVAC Designing be liable for any loss or damage including, without limitation, indirect or consequential loss or damage arising from use of this website or reliance on any content presented here.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">External Links</h2>
          <p>
            Our website may contain links to other websites which are not under our control. We have no influence over the nature, content, and availability of those sites. The inclusion of any links does not imply endorsement or recommendation of the views expressed within them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Content</h2>
          <p>
            HVAC Designing is not responsible for content from third-party websites or external platforms linked through our services. Any reliance placed on such information is strictly at the user’s own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
          <p>
            HVAC Designing disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We provide the website and its content "as is" without any warranty.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Advertising & Third-Party Links</h2>
          <p className="mb-2">
            This website may display advertisements provided by Google AdSense or other third-party networks. These networks may use cookies and similar technologies to serve personalized ads based on your browsing behavior.
          </p>
          <p className="mb-2">
            We do not control the advertisements shown by third-party networks. Users can manage their ad personalization preferences through the{' '}
            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Google Ad Settings
            </a>{' '}
            or opt out of third-party cookies through{' '}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              www.aboutads.info
            </a>.
          </p>
          <p>
            We are not responsible for the content or privacy practices of third-party advertisers or linked websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>
            This disclaimer shall be governed by and interpreted in accordance with applicable laws. Any disputes arising from this disclaimer shall be resolved through appropriate legal channels or arbitration as per applicable jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Disclaimer</h2>
          <p>
            HVAC Designing reserves the right to update or modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting on the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this disclaimer, you may contact us at:
          </p>
          <ul className="list-none mt-2">
            <li>
              <strong>HVAC Designing</strong>
            </li>
            <li>
              Website:{' '}
              <a href="https://www.hvacdesigning.com/contact" className="text-blue-500">
                https://www.hvacdesigning.com/contact
              </a>
            </li>
            <li>Email: <a href="mailto:info@hvacdesigning.com" className="text-blue-500">info@hvacdesigning.com</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Summary of This Disclaimer</h2>
          <p>This Disclaimer page includes the following elements for compliance and clarity:</p>
          <ol className="list-decimal list-inside mt-2">
            <li>General Disclaimer</li>
            <li>Limitation of Liability</li>
            <li>External Links</li>
            <li>Third-Party Content</li>
            <li>Disclaimer of Warranties</li>
            <li>Advertising & Third-Party Links</li>
            <li>Governing Law</li>
            <li>Changes to Disclaimer</li>
            <li>Contact Information</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
