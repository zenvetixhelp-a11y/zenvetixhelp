import { useState, useId, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormData {
  name: string;
  email: string;
  orderNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSupportPage() {
  const uid = useId();
  const nameId = `${uid}-name`;
  const emailId = `${uid}-email`;
  const orderNumberId = `${uid}-order`;
  const messageId = `${uid}-message`;
  const nameErrId = `${uid}-name-err`;
  const emailErrId = `${uid}-email-err`;
  const messageErrId = `${uid}-message-err`;

  const [form, setForm] = useState<FormData>({ name: '', email: '', orderNumber: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const formReveal = useScrollReveal();

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) {
      e.message = 'Message is required.';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters.';
    }
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstErrId = errs.name ? nameId : errs.email ? emailId : messageId;
      (document.getElementById(firstErrId) as HTMLElement | null)?.focus();
      return;
    }

    const orderLine = form.orderNumber.trim()
      ? `Amazon Order Number: ${form.orderNumber.trim()}\n`
      : '';
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      orderLine,
      `Message:\n${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');

    const subject = encodeURIComponent('ZENVETIX Support Request');
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:support@zenvetix.com?subject=${subject}&body=${encodedBody}`;
    setSubmitted(true);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Support — ZENVETIX"
        description="Get help from the ZENVETIX support team. We respond to all inquiries within 24–48 hours. Email us at support@zenvetix.com."
        canonical="/contact"
      />
      <main id="main-content" className="pt-20">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="badge-blue mb-5 inline-flex">Get Help</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Contact Support</h1>
            <p className="text-lg text-gray-500">
              Have a question about your ZENVETIX alarm? Our team responds within 24–48 hours.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Info sidebar */}
              <div className="lg:col-span-2 space-y-6">
                <div className="card p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Email Us Directly</p>
                      <a href="mailto:support@zenvetix.com" className="text-blue-600 text-sm hover:underline">
                        support@zenvetix.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Response Time</p>
                      <p className="text-gray-500 text-sm">Within 24–48 hours</p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-5">
                  <p className="font-semibold text-gray-900 text-sm mb-2">Before contacting us, check:</p>
                  <ul className="space-y-2">
                    {[
                      { label: 'Setup Guide', to: '/setup' },
                      { label: 'Support Center FAQ', to: '/support' },
                      { label: 'Downloads page', to: '/downloads' },
                    ].map(({ label, to }) => (
                      <li key={to} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={13} className="text-blue-500 flex-shrink-0" aria-hidden="true" />
                        <Link to={to} className="hover:text-blue-600 transition-colors">{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="card p-8 text-center" role="status" aria-live="polite">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={28} className="text-green-600" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Email Client Opened</h2>
                    <p className="text-gray-500 mb-2">
                      Your default email app should have opened with your message pre-filled. Send it to complete your support request.
                    </p>
                    <p className="text-gray-400 text-sm mb-6">
                      Didn't open?{' '}
                      <a href="mailto:support@zenvetix.com" className="text-blue-600 hover:underline">
                        Email us directly
                      </a>
                    </p>
                    <button
                      onClick={() => { setForm({ name: '', email: '', orderNumber: '', message: '' }); setSubmitted(false); }}
                      className="btn-secondary text-sm"
                    >
                      Start Over
                    </button>
                  </div>
                ) : (
                  <div ref={formReveal as React.RefObject<HTMLDivElement>} className="reveal card p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div>
                        <label htmlFor={nameId} className="form-label">
                          Full Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id={nameId}
                          type="text"
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                          placeholder="Jane Smith"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? nameErrId : undefined}
                          autoComplete="name"
                        />
                        {errors.name && (
                          <p id={nameErrId} role="alert" className="mt-1.5 text-red-600 text-xs flex items-center gap-1">
                            <AlertCircle size={12} aria-hidden="true" />{errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor={emailId} className="form-label">
                          Email Address <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id={emailId}
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                          placeholder="jane@example.com"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? emailErrId : undefined}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p id={emailErrId} role="alert" className="mt-1.5 text-red-600 text-xs flex items-center gap-1">
                            <AlertCircle size={12} aria-hidden="true" />{errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor={orderNumberId} className="form-label">
                          Amazon Order Number <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <input
                          id={orderNumberId}
                          type="text"
                          value={form.orderNumber}
                          onChange={(e) => update('orderNumber', e.target.value)}
                          className="form-input"
                          placeholder="e.g. 113-1234567-1234567"
                          autoComplete="off"
                        />
                      </div>

                      <div>
                        <label htmlFor={messageId} className="form-label">
                          Message <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <textarea
                          id={messageId}
                          rows={5}
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          className={`form-input resize-none ${errors.message ? 'form-input-error' : ''}`}
                          placeholder="Describe your issue or question in detail..."
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? messageErrId : undefined}
                          maxLength={2000}
                        />
                        <div className="flex justify-between items-center mt-1">
                          {errors.message ? (
                            <p id={messageErrId} role="alert" className="text-red-600 text-xs flex items-center gap-1">
                              <AlertCircle size={12} aria-hidden="true" />{errors.message}
                            </p>
                          ) : <span />}
                          <span className="text-gray-400 text-xs ml-auto">{form.message.length}/2000</span>
                        </div>
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center">
                        <Send size={17} aria-hidden="true" /> Open Email Client
                      </button>
                      <p className="text-gray-400 text-xs text-center">
                        Clicking the button will open your email app with your message pre-filled. By submitting, you agree to our{' '}
                        <Link to="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
