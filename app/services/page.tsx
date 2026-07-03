'use client'; // Required for Framer Motion animations

import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/data/services';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users } from 'lucide-react'; // Icons for the new content section

// Animation variants for staggered orchestrations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100">
      <Header />

      {/* --- HERO SECTION WITH ANIMATION --- */}
      <section className="relative overflow-hidden border-b border-white/[0.04] pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900 to-brand-950" />
          <div className="absolute left-1/3 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[110px]" />
          <div className="absolute right-1/4 top-20 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[100px]" />
        </div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What We Offer
          </span>
          <h1 className="text-balance mx-auto mb-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            19 Services Across the Full Technology & Growth Stack
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-slate-400 sm:text-base">
            From e-commerce to AI & machine learning, every service is delivered by a specialized
            team inside Fast Group. Select a service to see what&apos;s included.
          </p>
        </motion.div>
      </section>

      {/* --- NEW CONTENT SECTION: WHY PARTNER WITH US --- */}
      <section className="relative border-b border-white/[0.02] bg-brand-950/50 py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Engineered for Enterprise-Grade Delivery
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Why leading modern brands rely on Fast Group ecosystems.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: Zap, title: "Rapid Deployment", desc: "Turn ideas into production-ready platforms at high velocity." },
              { icon: Shield, title: "Rigorous Security", desc: "Zero-trust architectures baked straight into every core division." },
              { icon: Target, title: "Precision Focus", desc: "Dedicated cross-functional units custom-assigned to your targets." },
              { icon: Users, title: "Unified Ecosystem", desc: "19 specialized branches syncing perfectly with no communication lag." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="group rounded-2xl border border-white/[0.04] bg-white/[0.01] p-6 transition-colors duration-300 hover:border-cyan-500/30 hover:bg-white/[0.02]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-medium text-white">{feature.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID WITH STAGGERED ANIMATIONS --- */}
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-white tracking-tight sm:text-2xl">
              Explore Our Capabilities
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, idx) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard service={service} index={idx} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}