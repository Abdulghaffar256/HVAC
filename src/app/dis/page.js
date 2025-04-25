
import { Metadata } from 'next';
import Head from 'next/head';

// Metadata export for SEO (replaces <Head>)
export const metadata = {
  title: 'Disclaimer | Epic Solutions',
};

export default function Disclaimer() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-light dark:bg-dark text-black dark:text-light transition-all border-solid border-dark dark:border-light">
     <Head>
        <title>About Us | Epic Solutions</title>
        <link rel="canonical" href="https://www.epicssolution.com/dis" />
      </Head>
    <main className="p-6 max-w-4xl mx-auto bg-light dark:bg-dark text-dark dark:text-light transition-all">
        <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>
        <p className="mb-8">
          Please read this disclaimer carefully before using{' '}
          <a href="https://www.epicssolution.com/" className="text-blue-500">
            https://www.epicssolution.com/
          </a>{' '}
          website.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">General Disclaimer</h2>
          <p>
            The information contained in this website is for general information purposes only. The information is provided by Epics Solution and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            In no event will Epics Solution be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">External Links</h2>
          <p>
            Through this website, you are able to link to other websites which are not under the control of Epics Solution. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Content</h2>
          <p>
            Epics Solution is not responsible for the content of any third-party websites or services linked to this website. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
          <p>
            Epics Solution disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>
            This disclaimer shall be governed by and construed in accordance with the laws. Any disputes arising out of or related to this disclaimer shall be resolved through binding arbitration in accordance with the rules of the [Arbitration Association], as amended from time to time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Disclaimer</h2>
          <p>
            Epics Solution reserves the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about this disclaimer, please contact us at:
          </p>
          <ul className="list-none">
            <li>
              <strong>Epics Solution</strong>
            </li>
            <li>
              Website:{' '}
              <a href="https://www.epicssolution.com/" className="text-blue-500">
                https://www.epicssolution.com/contact
              </a>
            </li>
          </ul>
          <div>
            <p>This Disclaimer page includes the following essential elements:</p>
            <ol>
              <li>General Disclaimer: A statement that the website's information is for general purposes only.</li>
              <li>Limitation of Liability: A statement that Epics Solution is not liable for any losses or damages.</li>
              <li>External Links: A statement that Epics Solution is not responsible for external links.</li>
              <li>Third-Party Content: A statement that Epics Solution is not responsible for third-party content.</li>
              <li>Disclaimer of Warranties: A statement that Epics Solution disclaims all warranties.</li>
              <li>Governing Law: A statement that specifies the governing law and jurisdiction.</li>
              <li>Changes to Disclaimer: A statement that Epics Solution reserves the right to modify the disclaimer.</li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}
