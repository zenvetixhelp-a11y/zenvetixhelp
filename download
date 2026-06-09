import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, QrCode } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Setup Guide', to: '/setup' },
  { label: 'Support Center', to: '/support' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isQR = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('ref');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {isQR && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-blue-600 text-white text-center text-xs font-medium py-2 px-4 flex items-center justify-center gap-2">
          <QrCode size={13} />
          <span>Scanned our QR code? <Link to="/setup" className="underline font-semibold">Start the Setup Guide</Link> to get started.</span>
        </div>
      )}
      <header
        role="banner"
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isQR ? 'top-8' : 'top-0'} ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16 md:h-18">
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="ZENVETIX home">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold text-lg leading-none font-heading">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight font-heading">ZENVETIX</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={location.pathname === link.to ? 'page' : undefined}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
                Get Support
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-white border-t border-gray-100`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-150 min-h-[48px] ${
                  location.pathname === link.to
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-2">
              <Link to="/contact" className="btn-primary w-full justify-center text-base">
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
