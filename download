import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Award, Users, CheckCircle, Star, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const HERO_IMG = 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200';

const trustItems = [
  { icon: Shield, label: 'FDA-Registered Facility', sub: 'Quality Assured' },
  { icon: Zap, label: 'Instant Alarm', sub: 'First Drop Detected' },
  { icon: Award, label: '30-Day Guarantee', sub: 'Risk-Free Trial' },
  { icon: Users, label: '10,000+ Families', sub: 'Helped Stay Dry' },
];

const steps = [
  { num: '01', title: 'Attach the Sensor', body: 'Clip the small moisture sensor to your child\'s underwear at the hip.' },
  { num: '02', title: 'Connect the Alarm', body: 'Snap the receiver onto the shoulder of their pajama top.' },
  { num: '03', title: 'Set the Volume', body: 'Choose from 3 alarm volumes — start loud to wake deep sleepers.' },
  { num: '04', title: 'Wake & Retrain', body: 'When the alarm sounds, guide your child to the bathroom to finish.' },
];

const reviews = [
  { name: 'Sarah M.', stars: 5, text: 'Dry within 3 weeks! My son finally stopped wetting the bed after years of trying everything.' },
  { name: 'James R.', stars: 5, text: 'Super easy to set up. The alarm is loud enough to actually wake my deep sleeper.' },
  { name: 'Lisa T.', stars: 5, text: 'Best purchase we made. Customer support was incredibly helpful too.' },
];

export default function HomePage() {
  const trustRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const introReveal = useScrollReveal({ threshold: 0.05 });
  const ctaReveal = useScrollReveal();
  useStaggerReveal(trustRef as React.RefObject<HTMLElement>, '.trust-item', 80);
  useStaggerReveal(stepsRef as React.RefObject<HTMLElement>, '.step-card', 100);
  useStaggerReveal(reviewsRef as React.RefObject<HTMLElement>, '.review-card', 120);

  return (
    <>
      <SEOHead
        title="ZENVETIX — Wireless Bedwetting Alarm | Official Support Site"
        description="ZENVETIX bedwetting alarm support: setup guide, downloads, and expert help. Trusted by 10,000+ families. Fast first-drop detection wakes kids instantly."
        canonical="/"
        ogImage={HERO_IMG}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="hero-gradient pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:32px_32px]" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge-white mb-5 inline-flex">Official Support Site</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Dry Nights Start <span className="text-blue-200">Here.</span>
                </h1>
                <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                  Everything you need to get your ZENVETIX bedwetting alarm set up, troubleshoot issues, and achieve consistent dry nights — fast.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/setup" className="btn-outline text-base min-h-[48px]">
                    Start Setup Guide <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link
                    to="/support"
                    className="inline-flex items-center gap-2 bg-blue-500/30 text-white font-semibold px-6 py-3 rounded-xl border border-blue-300/40 hover:bg-blue-500/50 transition-all duration-200 text-base min-h-[48px]"
                  >
                    Browse FAQ
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-300 fill-yellow-300" aria-hidden="true" />
                  ))}
                  <span className="text-blue-100 text-sm ml-1">4.8 / 5 on Amazon</span>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={HERO_IMG}
                    alt="Child sleeping peacefully after using ZENVETIX bedwetting alarm"
                    className="w-full h-80 object-cover"
                    loading="eager"
                    fetchPriority="high"
                    width={600}
                    height={320}
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Dry Night!</p>
                      <p className="text-gray-500 text-xs">No alarm triggered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-gray-50 border-y border-gray-100 py-10" aria-label="Trust indicators">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={trustRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustItems.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="trust-item reveal flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-1">
                    <Icon size={22} className="text-blue-600" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={introReveal as React.RefObject<HTMLDivElement>} className="reveal text-center max-w-2xl mx-auto mb-16">
              <span className="badge-blue mb-4 inline-flex">How It Works</span>
              <h2 className="section-heading mb-4">Up and Running in 4 Simple Steps</h2>
              <p className="section-subheading">Most families complete setup in under 10 minutes. No tools required.</p>
            </div>
            <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(({ num, title, body }) => (
                <div key={num} className="step-card reveal card p-6">
                  <span className="text-4xl font-bold text-blue-100 font-heading leading-none block mb-3">{num}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/setup" className="btn-primary">
                Full Setup Guide <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="badge-blue mb-4 inline-flex">Reviews</span>
              <h2 className="section-heading mb-4">Families Love ZENVETIX</h2>
            </div>
            <div ref={reviewsRef} className="grid md:grid-cols-3 gap-6">
              {reviews.map(({ name, stars, text }) => (
                <div key={name} className="review-card reveal card p-6">
                  <div className="flex gap-1 mb-3" aria-label={`${stars} out of 5 stars`}>
                    {[...Array(stars)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">"{text}"</p>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">Verified Amazon Purchase</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 hero-gradient">
          <div ref={ctaReveal as React.RefObject<HTMLDivElement>} className="reveal max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need Help? We're Here.</h2>
            <p className="text-blue-100 text-lg mb-8">
              Our support team responds within 24–48 hours. We're committed to helping your child achieve dry nights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-outline">
                Contact Support <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href="https://www.amazon.com/dp/B0CXYZEXAMPLE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-200 min-h-[48px]"
              >
                Buy on Amazon <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
