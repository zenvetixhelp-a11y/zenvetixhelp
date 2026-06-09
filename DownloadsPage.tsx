import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ChevronDown, ThumbsUp, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    id: 'q1', cat: 'Setup',
    question: 'How do I attach the sensor correctly?',
    answer: "Clip the moisture sensor to the inside waistband of your child's underwear, near the hip. The two metal contact pads must face inward toward the skin. Avoid placing it at the crotch seam — the hip position detects moisture just as quickly and is more comfortable. Make sure the clip is secure but not pinching.",
  },
  {
    id: 'q2', cat: 'Setup',
    question: 'Do I need to charge the alarm before first use?',
    answer: 'Yes. Charge the alarm receiver for at least 2 hours before the first use using the included USB cable. A full charge lasts approximately 7–10 nights of use. A low battery indicator light will flash red when charging is needed. Never use the alarm while charging.',
  },
  {
    id: 'q3', cat: 'Troubleshooting',
    question: 'The alarm is not sounding when the sensor gets wet. What should I do?',
    answer: "First, check that the sensor is firmly clipped and the metal contact pads are touching skin. Then press the test button on the receiver — if it beeps, the receiver is working. If the alarm doesn't trigger during a wetting event, the sensor may be mispositioned or the connection may be loose. Try re-clipping the sensor closer to the hip. If the issue persists, contact us at support@zenvetix.com.",
  },
  {
    id: 'q4', cat: 'Troubleshooting',
    question: 'My child sleeps through the alarm. What can I do?',
    answer: "This is the most common issue and is normal at first. Make sure the alarm is set to its highest volume level. You may need to go into your child's room to assist in waking them for the first several weeks. Over time (typically 4–8 weeks), most children begin waking on their own. Never silence the alarm yourself without waking your child first.",
  },
  {
    id: 'q5', cat: 'Troubleshooting',
    question: 'The alarm keeps going off without any wetting. Why?',
    answer: "False alarms are usually caused by sweat or condensation on the sensor. Make sure the sensor is clipped to the hip area and that the metal contacts are clean and dry before bedtime. Wipe the sensor contacts with a dry cloth before each use. If false alarms continue, the sensor may need to be replaced — contact support.",
  },
  {
    id: 'q6', cat: 'Using the Alarm',
    question: 'How long will it take to see results?',
    answer: 'Most children show significant improvement within 4–8 weeks of consistent nightly use. Bedwetting alarm therapy has a 70–80% success rate — the highest of any bedwetting treatment. Consistency is critical: use the alarm every single night without skipping.',
  },
  {
    id: 'q7', cat: 'Using the Alarm',
    question: 'What volume setting should I use?',
    answer: "Start with the highest volume level, especially for deep sleepers. If your child is consistently waking on their own after 2–3 weeks, you can lower the volume. The goal is for the alarm to be loud enough to rouse your child from deep sleep — always prioritize waking effectiveness.",
  },
  {
    id: 'q8', cat: 'Maintenance',
    question: 'How do I clean the sensor?',
    answer: 'Wipe the sensor and its metal contact pads with a slightly damp cloth after each use. Do not submerge the sensor in water or place it in the washing machine — it is not waterproof. Allow it to air dry completely before storing.',
  },
  {
    id: 'q9', cat: 'Warranty',
    question: 'What is covered under warranty?',
    answer: 'ZENVETIX offers a 30-day satisfaction guarantee and a 90-day limited warranty against manufacturing defects. If your alarm stops working due to a defect within 90 days of purchase, contact us at support@zenvetix.com with your Amazon order number. We will send a replacement at no charge. Damage from misuse or water immersion is not covered.',
  },
];

const categories = ['All', 'Setup', 'Troubleshooting', 'Using the Alarm', 'Maintenance', 'Warranty'];

export default function SupportCenterPage() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState<string | null>(null);
  const headingReveal = useScrollReveal();

  const filtered = faqs.filter((f) => {
    const matchCat = cat === 'All' || f.cat === cat;
    const q = query.toLowerCase();
    const matchQuery = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  const counts = Object.fromEntries(
    categories.map((c) => [c, c === 'All' ? faqs.length : faqs.filter((f) => f.cat === c).length])
  );

  return (
    <>
      <SEOHead
        title="Support Center & FAQ — ZENVETIX"
        description="Find answers to common ZENVETIX bedwetting alarm questions. Setup help, troubleshooting, maintenance guides, and warranty information."
        canonical="/support"
      />
      <main id="main-content" className="pt-20">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div ref={headingReveal as React.RefObject<HTMLDivElement>} className="reveal max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="badge-blue mb-5 inline-flex">Support Center</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">How Can We Help?</h1>
            <p className="text-lg text-gray-500 mb-8">Search our FAQ or browse by category below.</p>
            <div className="relative max-w-xl mx-auto">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="form-input pl-11 pr-10 text-base"
                aria-label="Search frequently asked questions"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  aria-label="Clear search"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Category filters */}
        <div className="sticky top-16 z-30 bg-white border-b border-gray-100 py-3 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 overflow-x-auto">
            <div className="flex gap-2 min-w-max" role="group" aria-label="Filter by category">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 min-h-[36px] ${
                    cat === c ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {c}
                  <span className={`text-xs rounded-full px-1.5 py-0.5 ${cat === c ? 'bg-blue-500' : 'bg-gray-200 text-gray-500'}`}>
                    {counts[c]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ list */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-4">No results for "{query}".</p>
                <button onClick={() => { setQuery(''); setCat('All'); }} className="btn-secondary text-sm">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map(({ id, question, answer, cat: itemCat }) => {
                  const isOpen = open === id;
                  const contentId = `faq-answer-${id}`;
                  const triggerId = `faq-trigger-${id}`;
                  return (
                    <div key={id} className="card overflow-hidden">
                      <button
                        id={triggerId}
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors min-h-[60px]"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full whitespace-nowrap mt-0.5 flex-shrink-0">
                            {itemCat}
                          </span>
                          <span className="font-semibold text-gray-900 text-sm leading-snug">{question}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        id={contentId}
                        role="region"
                        aria-labelledby={triggerId}
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
                          <div className="mt-4 flex items-center gap-3">
                            <span className="text-xs text-gray-400">Was this helpful?</span>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-medium"
                            >
                              <ThumbsUp size={12} aria-hidden="true" /> Still need help? Contact us
                              <ArrowRight size={11} aria-hidden="true" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="font-bold text-gray-900 text-xl mb-2">Didn't Find Your Answer?</h2>
              <p className="text-gray-500 text-sm mb-6">Send us a message and we'll respond within 24–48 hours.</p>
              <Link to="/contact" className="btn-primary">
                Contact Support <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
