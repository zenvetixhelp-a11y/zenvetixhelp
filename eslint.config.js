import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Package, Download, ArrowRight, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const SETUP_IMG = 'https://images.pexels.com/photos/6266977/pexels-photo-6266977.jpeg?auto=compress&cs=tinysrgb&w=800';
const SENSOR_IMG = 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600';

const steps = [
  {
    icon: Package,
    title: 'Unbox Your ZENVETIX Alarm',
    desc: "You should have: 1 moisture sensor, 1 alarm receiver, 1 USB charging cable, and a quick-start card.",
    tips: ['Charge the alarm for 2 hours before first use.', 'Keep the sensor away from water when charging.'],
  },
  {
    icon: CheckCircle,
    title: 'Attach the Moisture Sensor',
    desc: "Clip the sensor to the inside of your child's underwear, positioned near the hip area — not at the crotch seam.",
    tips: ['Make sure the metal contacts face the skin.', 'Clip firmly but not too tight.'],
  },
  {
    icon: AlertCircle,
    title: 'Attach the Alarm Receiver',
    desc: "Snap the receiver clip onto the shoulder of your child's pajama top. The speaker should face outward.",
    tips: ['For deep sleepers, start at the highest volume.', 'The shoulder position ensures the alarm is heard clearly.'],
  },
  {
    icon: Clock,
    title: 'Test Before Bedtime',
    desc: 'Press and hold the test button on the receiver for 2 seconds. The alarm should sound immediately.',
    tips: ['Re-test every few nights to confirm proper contact.', 'Wet the sensor slightly with a damp finger to simulate activation.'],
  },
];

const faqs = [
  { q: 'How long until the alarm wakes my child?', a: 'The alarm triggers within seconds of the first drop of moisture. Most children begin responding within 1–3 weeks of consistent nightly use.' },
  { q: 'What if my child sleeps through the alarm?', a: 'Go wake your child manually, guide them to the bathroom, and help them turn off the alarm. Do not turn it off for them — they need to make the association.' },
  { q: 'How do I wash the sensor?', a: 'Wipe the sensor with a damp cloth. Do not submerge in water or machine wash. Allow it to air dry completely before each night of use.' },
];

export default function SetupGuidePage() {
  const [activeVideo, setActiveVideo] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);
  const faqReveal = useScrollReveal();
  const ctaReveal = useScrollReveal();
  useStaggerReveal(stepsRef as React.RefObject<HTMLElement>, '.setup-step', 120);

  return (
    <>
      <SEOHead
        title="Setup Guide — ZENVETIX Bedwetting Alarm"
        description="Step-by-step instructions to set up your ZENVETIX wireless bedwetting alarm. Follow our easy 4-step guide and get your child started on dry nights tonight."
        canonical="/setup"
        ogImage={SETUP_IMG}
      />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="badge-blue mb-5 inline-flex">Step-by-Step Guide</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Set Up Your ZENVETIX Alarm
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Most families complete setup in under 10 minutes. Follow these steps in order and your child will be ready for their first night tonight.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-500" aria-hidden="true" /> Takes ~10 minutes</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" aria-hidden="true" /> No tools needed</span>
              <span className="flex items-center gap-1.5"><Package size={14} className="text-blue-500" aria-hidden="true" /> Everything included</span>
            </div>
          </div>
        </section>

        {/* QR banner */}
        <div className="bg-blue-600 py-3 px-4" role="banner">
          <p className="text-white text-sm text-center font-medium">
            Just received your ZENVETIX alarm? You're in the right place. Follow the steps below to get started tonight.
          </p>
        </div>

        {/* Steps */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={stepsRef} className="space-y-10">
              {steps.map(({ icon: Icon, title, desc, tips }, i) => (
                <div key={i} className="setup-step reveal">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={17} className="text-blue-500" aria-hidden="true" />
                        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
                      <ul className="space-y-2">
                        {tips.map((tip, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                            <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i < steps.length - 1 && <div className="ml-6 mt-6 w-px h-6 bg-gray-200" aria-hidden="true"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal">
              <span className="badge-blue mb-4 inline-flex">Video Walkthrough</span>
              <h2 className="section-heading mb-4">Watch the Full Setup Video</h2>
              <p className="section-subheading mb-8">Prefer watching? Our setup video covers every step in detail.</p>
            </div>
            <div
              className="reveal relative rounded-2xl overflow-hidden bg-gray-900 aspect-video cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label="Play ZENVETIX setup video"
              onClick={() => setActiveVideo(true)}
              onKeyDown={(e) => e.key === 'Enter' && setActiveVideo(true)}
            >
              <img
                src={SENSOR_IMG}
                alt="Setup video thumbnail"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                loading="lazy"
              />
              {!activeVideo ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-blue-600 ml-1" aria-hidden="true"></div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  <p className="text-white text-sm">Video coming soon</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div ref={faqReveal as React.RefObject<HTMLDivElement>} className="reveal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading mb-2 text-center">Setup FAQs</h2>
            <p className="section-subheading text-center mb-10">Common questions from first-time users.</p>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="card p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-50">
          <div ref={ctaReveal as React.RefObject<HTMLDivElement>} className="reveal max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="section-heading mb-4">Still Have Questions?</h2>
            <p className="section-subheading mb-8">Our support team is ready to help — usually within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Contact Support <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/downloads" className="btn-secondary">
                <Download size={18} aria-hidden="true" /> Download Manual
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
