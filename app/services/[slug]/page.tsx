import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import * as Icons from 'lucide-react';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, 
  Zap, Star, Award, TrendingUp, Sparkles, 
  HelpCircle, ChevronRight, Activity, Globe
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/data/services';
import { accentMap } from '@/lib/accent';
import { cn } from '@/lib/utils';

interface ServicePageProps {
  params: { slug: string };
}

// 1. Next.js Static Paths Generation
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// 2. Next.js SEO Dynamic Metadata
export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service | Fast Group' };
  return {
    title: `${service.name} | Enterprise Digital Solutions | Fast Group`,
    description: `${service.shortDescription} Discover our specialized engagement methodology, key operational milestones, and integrated deliverables designed to scale modern enterprise infrastructures.`,
    alternates: {
      canonical: `https://fastgroup.com/services/${params.slug}`
    }
  };
}

// 3. Fully Dynamic Service Detail Component
export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string; strokeWidth?: number }>;
  const accent = accentMap[service.accent] || { text: 'text-blue-400', bgSoft: 'bg-blue-500/10', glow: 'from-blue-500/20' };
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  // --- DYNAMIC IMAGE DICTIONARY ---
  // Maps individual service slugs to explicit, highly tailored Unsplash premium tech imagery
  const serviceImages: Record<string, { hero: string; side: string }> = {
    'cloud-infrastructure': {
      hero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', // Cyber grid/space data
      side: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80'   // Server room architecture
    },
    'data-engineering': {
      hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', // Analytics screens/charts
      side: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80'   // Abstract node connections
    },
    'product-design': {
      hero: 'https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=1200&q=80', // UI design/wireframes
      side: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80'   // Wireframing sketchpad/desk
    },
    'devops-automation': {
      hero: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80', // Code execution pipelines
      side: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'   // Glowing terminal lines
    },
    'custom-software': {
      hero: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80', // Deep software development workspace
      side: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'   // Clean code IDE display
    }
  };

  // Fallback to high-quality abstract technology assets if slug is not matched
  const activeImages = serviceImages[service.slug] || {
    hero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    side: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-slate-100 selection:bg-cyan-500/30 font-sans">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden border-b border-white/[0.04] pb-20 pt-32 sm:pb-28 sm:pt-40 md:pt-48">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-brand-950 to-brand-950" />
          <div className={cn('absolute left-1/3 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full blur-[140px] opacity-60', accent.glow)} />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="group mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors hover:text-white sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all services
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7 transition-all duration-700 transform translate-y-0 opacity-100">
              <div className={cn('inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] shadow-inner', accent.bgSoft)}>
                {Icon && <Icon className={cn('h-6 w-6', accent.text)} strokeWidth={1.8} />}
              </div>
              
              <span className="block text-xs font-bold uppercase tracking-widest text-cyan-400 sm:text-sm">
                Enterprise Grade Solutions
              </span>
              
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.15]">
                {service.name}
              </h1>
              
              <p className="text-base font-light leading-relaxed text-slate-300 sm:text-lg md:text-xl">
                {service.longDescription || service.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-full border border-white/[0.04] bg-white/[0.02] px-4 py-2 text-xs text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>ISO 27001 Compliant Frameworks</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/[0.04] bg-white/[0.02] px-4 py-2 text-xs text-slate-300">
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>SLA Backed Execution</span>
                </div>
              </div>
            </div>

            {/* Premium Dynamic Illustration Frame */}
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-brand-900/40 shadow-2xl transition-all duration-500 hover:border-white/[0.15] sm:h-80 md:h-96 lg:col-span-5">
              <Image 
                src={activeImages.hero}
                alt={`${service.name} Architectural Overview`}
                fill
                priority
                className="object-cover opacity-60 mix-blend-luminosity transition-all duration-1000 hover:scale-105 hover:opacity-80 hover:mix-blend-normal"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/10 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/[0.08] bg-brand-950/80 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Global Efficiency Index</p>
                    <p className="text-sm font-semibold text-white">99.98% Operational Runtime</p>
                  </div>
                </div>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO CONTENT & VALUE PROP SECTION --- */}
      <section className="border-b border-white/[0.02] py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Transformative Architecture Built For Infinite Scalability
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                In a highly digitized modern landscape, partial implementations introduce fragmentation. Our methodology surrounding <strong>{service.name}</strong> ensures strict adherence to enterprise design standards, allowing unified system consolidation while completely eliminating operational technical debt.
              </p>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                We combine proactive analytics matrices with containerized architectural components. By mapping systemic constraints prior to rollout, your engineering environments achieve resilience profiles ready to support volatile shifts in global market demand.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.04] bg-brand-900/20 p-5">
                  <Award className="mb-3 h-5 w-5 text-cyan-400" />
                  <h4 className="mb-1 text-sm font-semibold text-white">Industry Best Practices</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">Built from historical alignment patterns tested across multi-tier production environments.</p>
                </div>
                <div className="rounded-xl border border-white/[0.04] bg-brand-900/20 p-5">
                  <TrendingUp className="mb-3 h-5 w-5 text-purple-400" />
                  <h4 className="mb-1 text-sm font-semibold text-white">Measurable Performance Cap</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">Real-time indicators feed straight into corporate infrastructure analytics pipelines.</p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-gradient-to-b from-brand-900/40 to-brand-950 p-6 lg:col-span-5 sm:p-8">
              <div>
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 border border-blue-500/20">
                  <Sparkles className="h-3 w-3" /> Capability Case
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-white sm:text-xl">
                  Unified System Optimization
                </h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-slate-400 sm:text-sm">
                  Discover how we refactored strategic delivery frameworks for industry leaders, optimizing output metrics and lowering structural overhead seamlessly.
                </p>
              </div>

              {/* Dynamic Contextual Case Study Graphic */}
              <div className="relative my-6 h-36 w-full overflow-hidden rounded-xl border border-white/[0.04]">
                <Image 
                  src={activeImages.side}
                  alt="Telemetry data visualization metric suite"
                  fill
                  className="object-cover opacity-40 mix-blend-luminosity hover:opacity-60 transition-opacity duration-300"
                  sizes="(max-w-1024px) 100vw, 30vw"
                />
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                <div>
                  <p className="text-xs font-bold text-white">340% Growth</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Average Analytics Yield</p>
                </div>
                <Link href="/case-studies" className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline">
                  Read Case Study <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC TIMELINE & SIDEBAR --- */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-12">
            
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="mb-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Strategic Deployment Sequence
                </h2>
                <p className="mb-8 text-xs text-slate-400 font-light sm:text-sm">
                  Our systematic execution matrix breaks down complex technical operations into trackable, verified workflow cycles.
                </p>

                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div 
                      key={step.title} 
                      className="group flex gap-4 rounded-xl border border-white/[0.04] bg-brand-900/20 p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-brand-900/40"
                    >
                      <span
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9 sm:text-sm',
                          accent.bgSoft,
                          accent.text
                        )}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-white transition-colors group-hover:text-cyan-400 sm:text-base">
                          {step.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/[0.04] pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-display text-xl font-bold text-white">Frequently Addressed Parameters</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { q: "What security frameworks govern this project environment?", a: "Every layer is protected via TLS 1.3, continuous static code analysis (SAST), and runtime container validation protocols tailored specifically to client network architecture rules." },
                    { q: "How are internal alignment shifts managed during production?", a: "We operate on tight continuous validation sprints. Scope adjustments undergo direct structural dependency tracking prior to core codebase inclusion cycles." }
                  ].map((faq, idx) => (
                    <div key={idx} className="rounded-xl border border-white/[0.04] bg-brand-900/10 p-4 transition-colors hover:border-white/[0.08]">
                      <h4 className="text-xs font-semibold text-white sm:text-sm">{faq.q}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400 font-light">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Deliverables Card Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-brand-900/50 to-brand-950 p-6 shadow-xl backdrop-blur-sm sm:p-8">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                    Integrated Deliverables
                  </h3>
                  
                  <ul className="mb-8 space-y-4">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-xs text-slate-300 sm:text-sm">
                        <CheckCircle2 className={cn('mt-0.5 h-4 w-4 shrink-0', accent.text)} />
                        <span className="leading-tight">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="relative block w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:text-sm"
                  >
                    Initiate Engagement Scope
                  </Link>

                  <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-slate-500">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Cross-Border Availability Ecosystem</span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-5">
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <p className="text-xs font-light italic leading-relaxed text-slate-400">
                    "The strategic validation matrices deployed during development transformed our product velocity entirely. Absolute masterclass in execution."
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white">— VP Engineering, NexaCorp</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- RELATED CROSS-LINK MATRIX --- */}
      <section className="border-t border-white/[0.04] bg-brand-900/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Synergistic Frameworks</span>
              <h2 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">Explore Related Segments</h2>
            </div>
            <Link href="/services" className="text-xs font-semibold text-slate-400 hover:text-white underline underline-offset-4">
              View All Architectural Verticals
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {related.map((s, idx) => (
              <div key={s.id} className="transition-transform duration-300 hover:-translate-y-1">
                <ServiceCard service={s} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}