@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: #1F2937;
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
}

@layer components {
  .btn-primary {
    @apply inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0;
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0;
  }

  .btn-outline {
    @apply inline-flex items-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200;
  }

  .card {
    @apply bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1;
  }

  .section-heading {
    @apply text-3xl md:text-4xl font-bold text-gray-900 leading-tight;
  }

  .section-subheading {
    @apply text-lg text-gray-500 leading-relaxed;
  }

  .badge-blue {
    @apply inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide;
  }

  .badge-white {
    @apply inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide backdrop-blur-sm;
  }

  .form-label {
    @apply block text-sm font-semibold text-gray-700 mb-1.5;
  }

  .form-input {
    @apply w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200;
  }

  .form-input-error {
    @apply border-red-400 focus:ring-red-400;
  }

  .hero-gradient {
    background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 40%, #3B82F6 100%);
  }

  .skip-link {
    @apply absolute -top-12 left-4 z-[999] bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all duration-150 focus:top-4;
  }
}

@layer utilities {
  .animate-fade-up {
    animation: fadeUp 0.6s ease-out both;
  }

  .animate-fade-in {
    animation: fadeIn 0.5s ease-out both;
  }

  .animation-delay-100 { animation-delay: 100ms; }
  .animation-delay-200 { animation-delay: 200ms; }
  .animation-delay-300 { animation-delay: 300ms; }
  .animation-delay-400 { animation-delay: 400ms; }
  .animation-delay-500 { animation-delay: 500ms; }

  /* Scroll reveal */
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .reveal-left {
    opacity: 0;
    transform: translateX(-28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }

  .reveal-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .reveal-right {
    opacity: 0;
    transform: translateX(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }

  .reveal-right.visible {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal-left, .reveal-right {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .animate-fade-up, .animate-fade-in {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
