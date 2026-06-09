import { Link } from 'react-router-dom';
import { FileText, Download, BookOpen, Award, ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { useRef } from 'react';

const downloads = [
  {
    icon: FileText,
    title: 'User Manual (English)',
    desc: 'Complete instructions including setup, maintenance, troubleshooting, and warranty.',
    size: '2.4 MB · PDF',
    href: '/downloads/zenvetix-manual-en.pdf',
  },
  {
    icon: BookOpen,
    title: 'Quick Start Card',
    desc: 'One-page printable guide — perfect to keep near the alarm.',
    size: '380 KB · PDF',
    href: '/downloads/zenvetix-quickstart.pdf',
  },
  {
    icon: Award,
    title: 'Warranty Registration',
    desc: 'Register your product to activate your 90-day warranty and 30-day guarantee.',
    size: '220 KB · PDF',
    href: '/downloads/zenvetix-warranty.pdf',
  },
];

const tips = [
  'Use the alarm every single night — consistency is the key to success.',
  'Set a bedtime routine: attach the sensor at the same time each night.',
  'Limit fluids for 1–2 hours before bed to reduce wetting frequency.',
  'When the alarm sounds, guide your child to the bathroom themselves.',
  'Celebrate every dry night — positive reinforcement accelerates results.',
  'Most children show improvement within 4–8 weeks of consistent use.',
];

export default function DownloadsPage() {
  const downloadsRef = useRef<HTMLDivElement>(null);
  const tipsReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  useStaggerReveal(downloadsRef as React.RefObject<HTMLElement>, '.dl-card', 100);

  return (
    <>
      <SEOHead
        title="Downloads — ZENVETIX Bedwetting Alarm"
        description="Download the ZENVETIX user manual, quick start guide, and warranty registration form. All documents available as free PDF downloads."
        canonical="/downloads"
      />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="badge-blue mb-5 inline-flex">Free Downloads</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Product Documents</h1>
            <p className="text-lg text-gray-500">Download the user manual, quick start guide, and warranty form for your ZENVETIX alarm.</p>
          </div>
        </section>

        {/* Download cards */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={downloadsRef} className="grid sm:grid-cols-3 gap-6">
              {downloads.map(({ icon: Icon, title, desc, size, href }) => (
                <div key={title} className="dl-card reveal card p-6 flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-blue-600" aria-hidden="true" />
                  </div>
                  <h2 className="font-bold text-gray-900 mb-2">{title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                  <p className="text-gray-400 text-xs mb-4">{size}</p>
                  <a
                    href={href}
                    download
                    className="btn-primary justify-center text-sm py-2.5"
                    aria-label={`Download ${title}`}
                  >
                    <Download size={16} aria-hidden="true" /> Download
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-xs mt-8">
              Documents open in a new tab. Requires a PDF reader such as Adobe Acrobat or your browser's built-in viewer.
            </p>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-gray-50">
          <div ref={tipsReveal as React.RefObject<HTMLDivElement>} className="reveal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="badge-blue mb-4 inline-flex">Pro Tips</span>
              <h2 className="section-heading mb-4">Get the Best Results</h2>
              <p className="section-subheading">Follow these expert tips to accelerate your child's progress.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div ref={ctaReveal as React.RefObject<HTMLDivElement>} className="reveal max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="section-heading mb-4">Need More Help?</h2>
            <p className="section-subheading mb-8">Our support team responds within 24–48 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Contact Support <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/support" className="btn-secondary">Browse FAQ</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
