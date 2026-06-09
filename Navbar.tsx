import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing zenvetix.com, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, please discontinue use of the Site.',
  },
  {
    title: '2. Medical Disclaimer',
    body: 'ZENVETIX bedwetting alarms are behavioral conditioning tools and are NOT medical devices. They are not intended to diagnose, treat, cure, or prevent any medical condition. Bedwetting (nocturnal enuresis) may have underlying medical causes. Consult a licensed healthcare provider before beginning any bedwetting treatment program, especially if your child experiences daytime accidents, pain, or has a history of urinary tract infections.',
  },
  {
    title: '3. Use of the Site',
    body: 'This Site is provided for informational and support purposes related to ZENVETIX products. You agree not to misuse the Site, submit false support requests, or attempt to disrupt Site functionality.',
  },
  {
    title: '4. Intellectual Property',
    body: 'All content on this Site — including text, images, logos, and design — is the property of ZENVETIX and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without written permission.',
  },
  {
    title: '5. Product Warranty',
    body: 'ZENVETIX products are sold on Amazon and subject to a 30-day satisfaction guarantee and 90-day limited warranty against manufacturing defects. Warranty claims must be submitted to support@zenvetix.com with proof of purchase. This Site does not process returns or refunds — please use Amazon\'s return system for order-related issues.',
  },
  {
    title: '6. Limitation of Liability',
    body: 'To the maximum extent permitted by law, ZENVETIX shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or this Site. Our total liability shall not exceed the price paid for the product giving rise to the claim.',
  },
  {
    title: '7. User-Submitted Information',
    body: 'When you submit a support request, you grant us permission to use that information to respond to your inquiry and improve our products. See our Privacy Policy for details on data handling.',
  },
  {
    title: '8. External Links',
    body: 'This Site may contain links to Amazon and other third-party sites. We are not responsible for the content or privacy practices of those sites.',
  },
  {
    title: '9. Governing Law',
    body: 'These Terms are governed by the laws of the United States. Any disputes shall be resolved in the applicable courts of the United States.',
  },
  {
    title: '10. Changes to These Terms',
    body: 'We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the Site constitutes acceptance of the revised Terms.',
  },
  {
    title: '11. Contact',
    body: 'For questions about these Terms, contact us at support@zenvetix.com.',
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <SEOHead
        title="Terms of Service — ZENVETIX"
        description="ZENVETIX Terms of Service. Read our terms for using the website and purchasing ZENVETIX bedwetting alarm products."
        canonical="/terms"
        noIndex={false}
      />
      <main id="main-content" className="pt-20">
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="badge-blue mb-4 inline-flex">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-500 text-sm">Last Updated: June 1, 2026</p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
              <p className="text-amber-800 text-sm font-semibold mb-1">Medical Disclaimer</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                ZENVETIX products are not medical devices. Always consult a healthcare provider if you have concerns about your child's health or bedwetting.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map(({ title, body }) => (
                <div key={title}>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-500">
              <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
