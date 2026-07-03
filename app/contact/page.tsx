'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { departments } from '@/lib/data/opportunities';
import { companies } from '@/lib/data/companies';

const contactDetails = [
  { icon: MapPin, label: 'Head Office', value: '148 Commerce Avenue, Suite 400, Metro City, 10001' },
  { icon: Phone, label: 'Phone', value: '+1 (800) 555-0142' },
  { icon: Mail, label: 'Email', value: 'hello@fastgroup.com' },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM' },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const presetDepartment = searchParams.get('department') ?? '';
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-brand-900/50 px-6 py-16 text-center">
        <CheckCircle2 className="mb-4 h-12 w-12 text-emerald-400" />
        <h3 className="mb-2 font-display text-xl font-semibold text-white">Message sent</h3>
        <p className="max-w-sm text-sm text-slate-400">
          Thanks for reaching out. A member of our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
            Division of interest
          </label>
          <select
            id="company"
            name="company"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white focus:border-blue-500/50"
            defaultValue=""
          >
            <option value="" disabled>Select a division</option>
            {companies.map((c) => (
              <option key={c.id} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="department" className="mb-2 block text-sm font-medium text-slate-300">
            Department (for careers)
          </label>
          <select
            id="department"
            name="department"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white focus:border-blue-500/50"
            defaultValue={presetDepartment}
          >
            <option value="">Not applicable</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project or role you're interested in..."
          className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500/50"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
      >
        {loading ? 'Sending…' : 'Send Message'}
        {!loading && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      <section className="relative overflow-hidden border-b border-white/[0.04] pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
          <div className="absolute left-1/4 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </span>
          <h1 className="text-balance mx-auto mb-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s Start a Conversation
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-slate-400 sm:text-base">
            Whether it&apos;s a project, a partnership, or a career move — tell us what you need
            and the right team will follow up.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-6 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/[0.06] bg-brand-900/50 p-6 sm:p-8 lg:col-span-3"
          >
            <Suspense fallback={<div className="text-sm text-slate-500">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactDetails.map((d) => (
              <div key={d.label} className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-brand-900/50 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <d.icon className="h-5 w-5 text-blue-400" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {d.label}
                  </p>
                  <p className="text-sm text-slate-300">{d.value}</p>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-xl border border-white/[0.06]">
              <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-brand-800 to-brand-900 text-sm text-slate-500">
                Map view
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
