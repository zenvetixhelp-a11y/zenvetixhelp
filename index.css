import { Link } from 'react-router-dom';
import { Home, BookOpen, HelpCircle, ArrowRight, QrCode } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const quickLinks = [
  { icon: Home, label: 'Home', sub: 'Back to the main page', to: '/' },
  { icon: BookOpen, label: 'Setup Guide', sub: 'Get your alarm working tonight', to: '/setup' },
  { icon: HelpCircle, label: 'Support Center', sub: 'Browse our FAQ library', to: '/support' },
];

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found — ZENVETIX"
        description="The page you're looking for doesn't exist. Return to the ZENVETIX support site."
        noIndex={true}
      />
      <main id="main-content" className="pt-20 min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gray-50">
        <div className="max-w-lg w-full text-center">
          {/* 404 badge */}
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span className="text-white font-bold text-4xl font-heading leading-none">404</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-500 text-lg mb-10">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          {/* QR visitor callout */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10 text-left">
            <div className="flex items-start gap-3">
              <QrCode size={18} className="text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">Scanned a QR code?</p>
                <p className="text-gray-500 text-sm">
                  If you scanned the QR code from your ZENVETIX package, head to the{' '}
                  <Link to="/setup" className="text-blue-600 font-medium hover:underline">Setup Guide</Link> to get started.
                </p>
              </div>
            </div>
          </div>

          {/* Quick nav cards */}
          <div className="grid gap-3">
            {quickLinks.map(({ icon: Icon, label, sub, to }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 hover:border-blue-200 hover:shadow-md transition-all duration-200 text-left group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Icon size={18} className="text-blue-600" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
