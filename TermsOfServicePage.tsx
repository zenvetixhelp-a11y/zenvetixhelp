import { Link } from 'react-router-dom';
import { Mail, ExternalLink, Shield, FileText } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Setup Guide', to: '/setup' },
  { label: 'Support Center', to: '/support' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact Support', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy', icon: Shield },
  { label: 'Terms of Service', to: '/terms', icon: FileText },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none font-heading">Z</span>
              </div>
              <span className="text-xl font-bold text-white font-heading tracking-tight">ZENVETIX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5">
              Helping Families Build Confidence, One Dry Night at a Time. Trusted by parents across the United States.
            </p>
            <a
              href="mailto:support@zenvetix.com"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              <Mail size={15} aria-hidden="true" />
              support@zenvetix.com
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Support</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                <div>
                  <p className="text-gray-300 font-medium">Response Time</p>
                  <p className="text-gray-500">Within 24–48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                <div>
                  <p className="text-gray-300 font-medium">Email Support</p>
                  <p className="text-gray-500">support@zenvetix.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" aria-hidden="true"></div>
                <div>
                  <p className="text-gray-300 font-medium">Amazon Purchase</p>
                  <a
                    href="https://www.amazon.com/dp/B0CXYZEXAMPLE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                  >
                    View on Amazon <ExternalLink size={11} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map(({ label, to, icon: Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-150 inline-flex items-center gap-2"
                  >
                    <Icon size={13} aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-gray-800 rounded-xl">
              <p className="text-gray-500 text-xs leading-relaxed">
                ZENVETIX is not a medical device and is not intended to diagnose, treat, or cure any medical condition.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 ZENVETIX. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Wireless Bedwetting Alarm &mdash; Trusted by Families Across the United States
          </p>
        </div>
      </div>
    </footer>
  );
}
