import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you submit a support request through our Contact page, we collect your name, email address, optional Amazon order number, and the content of your message. We do not collect payment information, browsing history beyond standard web server logs, or any information from children under 13.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information you provide solely to respond to your support request, diagnose product issues, and improve our products and support materials. We do not use your information for marketing without explicit consent.',
  },
  {
    title: '3. Data Storage',
    body: 'Support messages are stored securely using Supabase, a cloud database provider with industry-standard encryption at rest and in transit (TLS 1.2+). Data is stored in the United States.',
  },
  {
    title: '4. Data Sharing',
    body: 'We do not sell, rent, or trade your personal information to third parties. We may share information with service providers necessary to operate our website (e.g., hosting, database). These providers are contractually bound to protect your data.',
  },
  {
    title: '5. Data Retention',
    body: 'Support messages are retained for up to 2 years to provide consistent service history. You may request deletion of your data at any time by emailing support@zenvetix.com.',
  },
  {
    title: '6. Cookies',
    body: 'This website uses only essential cookies required for the site to function. We do not use tracking cookies, advertising cookies, or third-party analytics cookies.',
  },
  {
    title: '7. Children\'s Privacy',
    body: 'Our website is intended for parents and guardians. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.',
  },
  {
    title: '8. Your Rights',
    body: 'You have the right to access, correct, or delete personal information we hold about you. To exercise these rights, email support@zenvetix.com. We will respond within 30 days.',
  },
  {
    title: '9. Security',
    body: 'We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: '10. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page will reflect any changes. Continued use of the site after changes constitutes acceptance.',
  },
  {
    title: '11. Contact Us',
    body: 'If you have questions about this Privacy Policy, email us at support@zenvetix.com or use the Contact page.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — ZENVETIX"
        description="ZENVETIX Privacy Policy. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
        noIndex={false}
      />
      <main id="main-content" className="pt-20">
        <section className="bg-gradient-to-b from-blue-50 to-white py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="badge-blue mb-4 inline-flex">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">Last Updated: June 1, 2026</p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-2xl p-5 mb-10">
              <p className="text-gray-700 text-sm leading-relaxed">
                ZENVETIX ("we," "our," or "us") is committed to protecting your privacy. This policy describes what information we collect when you use zenvetix.com ("the Site") and how we use it.
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
              <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
              <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
