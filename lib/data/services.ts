import type { AccentColor } from './companies';

export type ServiceIcon =
  | 'ShoppingCart'
  | 'Code2'
  | 'PenTool'
  | 'Sparkles'
  | 'Megaphone'
  | 'Cloud'
  | 'Search'
  | 'Smartphone'
  | 'Globe'
  | 'Film'
  | 'Target'
  | 'ShieldCheck'
  | 'Palette'
  | 'BarChart3'
  | 'BrainCircuit'
  | 'Cpu'
  | 'Glasses'
  | 'Bot'
  | 'Boxes';

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  accent: AccentColor;
  icon: ServiceIcon;
  deliverables: string[];
  process: { title: string; detail: string }[];
}

export const services: Service[] = [
  {
    id: 'ecommerce-solutions',
    slug: 'ecommerce-solutions',
    name: 'E-commerce Solutions',
    shortDescription: 'Storefronts, checkout, and catalog systems built to convert.',
    longDescription:
      'We design and build full e-commerce experiences, from product catalog architecture to checkout and payment integration, tuned for conversion and built to scale with your order volume.',
    accent: 'blue',
    icon: 'ShoppingCart',
    deliverables: ['Custom storefront design', 'Payment & inventory integration', 'Conversion rate optimization'],
    process: [
      { title: 'Discover', detail: 'Audit your catalog, customers, and current funnel performance.' },
      { title: 'Build', detail: 'Design and develop the storefront, checkout, and integrations.' },
      { title: 'Launch & optimize', detail: 'Go live and iterate using real conversion data.' },
    ],
  },
  {
    id: 'software-development',
    slug: 'software-development',
    name: 'Software Development',
    shortDescription: 'Custom applications engineered for scale and reliability.',
    longDescription:
      'Our engineering team designs and ships custom software, from internal tools to customer-facing platforms, with a focus on maintainable architecture and long-term reliability.',
    accent: 'cyan',
    icon: 'Code2',
    deliverables: ['Custom application architecture', 'API & systems integration', 'Ongoing maintenance & support'],
    process: [
      { title: 'Scope', detail: 'Define requirements, architecture, and technical constraints.' },
      { title: 'Develop', detail: 'Build in iterative sprints with regular review checkpoints.' },
      { title: 'Support', detail: 'Maintain, monitor, and extend the platform post-launch.' },
    ],
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    shortDescription: 'Interfaces shaped by research, not guesswork.',
    longDescription:
      'We design digital products around how people actually use them: research-backed information architecture, wireframes, and high-fidelity interfaces that are easy to use on the first try.',
    accent: 'violet',
    icon: 'PenTool',
    deliverables: ['User research & journey mapping', 'Wireframes & prototypes', 'Design systems'],
    process: [
      { title: 'Research', detail: 'Understand your users, goals, and current friction points.' },
      { title: 'Design', detail: 'Wireframe, prototype, and refine based on feedback.' },
      { title: 'Handoff', detail: 'Deliver a design system ready for engineering.' },
    ],
  },
  {
    id: 'branding-identity',
    slug: 'branding-identity',
    name: 'Branding & Identity',
    shortDescription: 'Visual identity systems that hold up across every touchpoint.',
    longDescription:
      'We build brand identity systems, logo, color, typography, and voice, designed to stay consistent whether they show up on a website, a storefront, or a delivery van.',
    accent: 'amber',
    icon: 'Sparkles',
    deliverables: ['Logo & visual identity', 'Brand guidelines', 'Applied brand collateral'],
    process: [
      { title: 'Position', detail: 'Clarify what your brand stands for and who it speaks to.' },
      { title: 'Design', detail: 'Develop the visual identity system and guidelines.' },
      { title: 'Roll out', detail: 'Apply the identity consistently across touchpoints.' },
    ],
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    shortDescription: 'Campaigns across paid, social, and email that report to a number.',
    longDescription:
      'We plan and run digital marketing campaigns across paid search, social, and email, all tied back to measurable outcomes so every dollar spent has a reason behind it.',
    accent: 'rose',
    icon: 'Megaphone',
    deliverables: ['Paid media campaigns', 'Social & email marketing', 'Performance reporting'],
    process: [
      { title: 'Plan', detail: 'Set goals, audience, and channel mix.' },
      { title: 'Run', detail: 'Launch campaigns across chosen channels.' },
      { title: 'Report', detail: 'Track performance and reallocate spend toward what works.' },
    ],
  },
  {
    id: 'cloud-hosting-security',
    slug: 'cloud-hosting-security',
    name: 'Cloud Hosting & Security',
    shortDescription: 'Infrastructure that stays up, and stays protected.',
    longDescription:
      'We architect, host, and secure cloud infrastructure, balancing uptime, cost, and security so your systems stay available and protected as they grow.',
    accent: 'blue',
    icon: 'Cloud',
    deliverables: ['Cloud infrastructure setup', 'Security hardening & monitoring', 'Backup & disaster recovery'],
    process: [
      { title: 'Assess', detail: 'Review current infrastructure and security posture.' },
      { title: 'Migrate & harden', detail: 'Move to secure, scalable cloud infrastructure.' },
      { title: 'Monitor', detail: 'Watch uptime and threats around the clock.' },
    ],
  },
  {
    id: 'seo-content-creation',
    slug: 'seo-content-creation',
    name: 'SEO & Content Creation',
    shortDescription: 'Content and technical SEO that compound over time.',
    longDescription:
      'We pair technical SEO with a content strategy built around what your customers actually search for, so organic visibility keeps growing instead of resetting every quarter.',
    accent: 'emerald',
    icon: 'Search',
    deliverables: ['Technical SEO audits', 'Content strategy & production', 'Keyword & ranking tracking'],
    process: [
      { title: 'Audit', detail: 'Review technical SEO health and content gaps.' },
      { title: 'Produce', detail: 'Create content mapped to search intent.' },
      { title: 'Track', detail: 'Monitor rankings and refine the strategy.' },
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    shortDescription: 'Native and cross-platform apps for iOS and Android.',
    longDescription:
      'We build mobile apps for iOS and Android, native or cross-platform depending on your needs, covering everything from UI to backend integration and app store release.',
    accent: 'cyan',
    icon: 'Smartphone',
    deliverables: ['iOS & Android development', 'Backend & API integration', 'App store release management'],
    process: [
      { title: 'Design', detail: 'Design the app flow and interface.' },
      { title: 'Build', detail: 'Develop and test across target devices.' },
      { title: 'Release', detail: 'Publish to app stores and monitor performance.' },
    ],
  },
  {
    id: 'web-development',
    slug: 'web-development',
    name: 'Web Development',
    shortDescription: 'Fast, responsive websites built on modern frameworks.',
    longDescription:
      'We build responsive, high-performance websites using modern frameworks, from marketing sites to complex web applications, optimized for speed and search visibility.',
    accent: 'blue',
    icon: 'Globe',
    deliverables: ['Responsive website builds', 'Performance optimization', 'CMS integration'],
    process: [
      { title: 'Plan', detail: 'Define sitemap, content, and technical requirements.' },
      { title: 'Build', detail: 'Develop and test the site across devices.' },
      { title: 'Launch', detail: 'Deploy, monitor performance, and iterate.' },
    ],
  },
  {
    id: 'video-animation',
    slug: 'video-animation',
    name: 'Video & Animation',
    shortDescription: 'Motion content for product, brand, and marketing.',
    longDescription:
      'We produce video and animation for product explainers, brand films, and marketing campaigns, from scripting through final edit and motion graphics.',
    accent: 'amber',
    icon: 'Film',
    deliverables: ['Script & storyboard', 'Video production & editing', 'Motion graphics & animation'],
    process: [
      { title: 'Script', detail: 'Develop the narrative and storyboard.' },
      { title: 'Produce', detail: 'Shoot or animate, then edit the content.' },
      { title: 'Deliver', detail: 'Export in formats ready for every channel.' },
    ],
  },
  {
    id: 'lead-generation',
    slug: 'lead-generation',
    name: 'Lead Generation',
    shortDescription: 'Pipelines that turn interest into qualified leads.',
    longDescription:
      'We build lead generation systems, from landing pages to outreach and nurture sequences, designed to fill your pipeline with leads that are actually qualified to buy.',
    accent: 'violet',
    icon: 'Target',
    deliverables: ['Landing pages & funnels', 'Outreach & nurture sequences', 'Lead qualification & scoring'],
    process: [
      { title: 'Define', detail: 'Clarify your ideal customer and offer.' },
      { title: 'Generate', detail: 'Run campaigns to attract qualified leads.' },
      { title: 'Qualify', detail: 'Score and route leads into your pipeline.' },
    ],
  },
  {
    id: 'cyber-security',
    slug: 'cyber-security',
    name: 'Cyber Security',
    shortDescription: 'Threat detection and defense for growing organizations.',
    longDescription:
      'We assess, monitor, and defend your systems against cyber threats, covering vulnerability testing, incident response planning, and ongoing monitoring.',
    accent: 'rose',
    icon: 'ShieldCheck',
    deliverables: ['Vulnerability & penetration testing', 'Incident response planning', '24/7 threat monitoring'],
    process: [
      { title: 'Assess', detail: 'Identify vulnerabilities across your systems.' },
      { title: 'Remediate', detail: 'Close gaps and harden defenses.' },
      { title: 'Monitor', detail: 'Watch for threats continuously.' },
    ],
  },
  {
    id: 'graphic-designing',
    slug: 'graphic-designing',
    name: 'Graphic Designing',
    shortDescription: 'Visual design for print, digital, and campaigns.',
    longDescription:
      'We produce graphic design across print and digital, from campaign creative to packaging and internal collateral, keeping every asset on-brand.',
    accent: 'emerald',
    icon: 'Palette',
    deliverables: ['Campaign & marketing creative', 'Print & packaging design', 'Digital asset production'],
    process: [
      { title: 'Brief', detail: 'Align on goals, audience, and format.' },
      { title: 'Design', detail: 'Produce and refine the creative.' },
      { title: 'Deliver', detail: 'Package final files for every channel.' },
    ],
  },
  {
    id: 'data-science',
    slug: 'data-science',
    name: 'Data Science',
    shortDescription: 'Turning raw data into decisions you can act on.',
    longDescription:
      'We build data pipelines and analysis that turn raw operational data into decisions, covering everything from data engineering to dashboards and predictive modeling.',
    accent: 'blue',
    icon: 'BarChart3',
    deliverables: ['Data pipeline engineering', 'Analytics dashboards', 'Predictive modeling'],
    process: [
      { title: 'Collect', detail: 'Consolidate and clean your data sources.' },
      { title: 'Analyze', detail: 'Build models and dashboards around key questions.' },
      { title: 'Act', detail: 'Turn insights into operational decisions.' },
    ],
  },
  {
    id: 'ai-ml',
    slug: 'ai-ml',
    name: 'AI & Machine Learning',
    shortDescription: 'Applied AI systems built for real business problems.',
    longDescription:
      'We design and deploy applied AI and machine learning systems, from automation and recommendation engines to custom model development, focused on measurable business impact.',
    accent: 'cyan',
    icon: 'BrainCircuit',
    deliverables: ['Custom model development', 'AI-powered automation', 'Model monitoring & retraining'],
    process: [
      { title: 'Identify', detail: 'Pinpoint the highest-value use case.' },
      { title: 'Develop', detail: 'Build and train the model against real data.' },
      { title: 'Deploy', detail: 'Ship the model and monitor performance.' },
    ],
  },
  {
    id: 'iot-solutions',
    slug: 'iot-solutions',
    name: 'IoT Solutions',
    shortDescription: 'Connected devices and the systems behind them.',
    longDescription:
      'We build IoT solutions connecting hardware, sensors, and cloud platforms, so physical operations can be monitored and controlled in real time.',
    accent: 'amber',
    icon: 'Cpu',
    deliverables: ['Sensor & device integration', 'Real-time monitoring platforms', 'Edge & cloud architecture'],
    process: [
      { title: 'Design', detail: 'Map the devices, sensors, and data flow.' },
      { title: 'Connect', detail: 'Integrate hardware with cloud platforms.' },
      { title: 'Monitor', detail: 'Deliver real-time visibility and alerts.' },
    ],
  },
  {
    id: 'ar-vr-technology',
    slug: 'ar-vr-technology',
    name: 'AR & VR Technology',
    shortDescription: 'Immersive experiences for training, retail, and events.',
    longDescription:
      'We build augmented and virtual reality experiences for training simulations, retail try-on, and interactive events, blending 3D design with real-time engineering.',
    accent: 'violet',
    icon: 'Glasses',
    deliverables: ['AR/VR experience design', '3D content & simulation', 'Cross-platform deployment'],
    process: [
      { title: 'Concept', detail: 'Define the experience and interaction model.' },
      { title: 'Build', detail: 'Develop the 3D content and interactions.' },
      { title: 'Deploy', detail: 'Ship to target headsets and devices.' },
    ],
  },
  {
    id: 'rpa-solutions',
    slug: 'rpa-solutions',
    name: 'RPA Solutions',
    shortDescription: 'Automating repetitive workflows end to end.',
    longDescription:
      'We design robotic process automation that takes over repetitive, rules-based workflows, freeing your team to focus on work that actually needs a human.',
    accent: 'rose',
    icon: 'Bot',
    deliverables: ['Process automation mapping', 'Bot development & deployment', 'Ongoing monitoring & support'],
    process: [
      { title: 'Map', detail: 'Identify workflows worth automating.' },
      { title: 'Automate', detail: 'Build and test the automation.' },
      { title: 'Support', detail: 'Monitor and refine bots over time.' },
    ],
  },
  {
    id: 'metaverse-technology',
    slug: 'metaverse-technology',
    name: 'Metaverse Technology',
    shortDescription: 'Virtual spaces for brands, events, and commerce.',
    longDescription:
      'We build persistent virtual spaces and metaverse experiences for brand activation, virtual events, and commerce, combining 3D design with scalable backend infrastructure.',
    accent: 'emerald',
    icon: 'Boxes',
    deliverables: ['Virtual space design', 'Avatar & interaction systems', 'Platform integration'],
    process: [
      { title: 'Concept', detail: 'Define the space, purpose, and audience.' },
      { title: 'Build', detail: 'Develop the environment and interactions.' },
      { title: 'Launch', detail: 'Deploy and host the experience.' },
    ],
  },
];
