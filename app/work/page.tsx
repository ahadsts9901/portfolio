import { ArrowRight, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'My Work | Muhammad Ahad',
  description: 'Check out the projects and products I have built - from e-commerce platforms to AI systems.',
}

const projects = [
  {
    title: 'E-Commerce Platform (MERN)',
    description: 'Full-stack MERN application with payment gateway integration, inventory management, and real-time updates.',
    role: 'Frontend & Backend',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Fastify', 'Docker'],
    link: 'https://mern-store-gold.vercel.app',
    company: 'Personal Project',
  },
  {
    title: 'Coupon & ERP Platform',
    description: 'Multi-language, multi-currency SaaS platform with advanced couponing system, analytics, and vendor management.',
    role: 'Frontend & Backend',
    technologies: ['Next.js', 'MongoDB', 'AWS', 'Redux', 'TypeScript', 'Express.js'],
    link: 'https://coupzone.com',
    company: 'KENZ Innovations',
  },
  {
    title: 'Software House Website',
    description: 'Modern, responsive website for EAI Soft showcasing services and portfolio.',
    role: 'Frontend Development',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Sanity.io'],
    link: 'https://eaisoft.com',
    company: 'EAI Soft',
  },
  {
    title: 'Car Buying & Selling Platform',
    description: 'Full-featured automotive marketplace with advanced filtering and listing management.',
    role: 'Frontend Development',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Material UI', 'Tailwind CSS'],
    link: 'https://aicarz.com',
    company: 'AI Carz',
  },
  {
    title: 'Car AI Platform',
    description: 'AI-powered car recommendation and management platform for UK market.',
    role: 'Frontend Development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Integration', 'Stripe'],
    link: 'https://carzai.co.uk',
    company: 'Carz AI UK',
  },
  {
    title: 'Roofing System Admin Dashboard',
    description: 'Complete admin dashboard and website for roofing services with project management and customer portal.',
    role: 'Frontend & Backend',
    technologies: ['Next.js', 'MonggoDB', 'Node.js', 'AWS', 'Docker'],
    link: 'https://benifyexteriors.com',
    company: 'Benify Exteriors',
  },
  {
    title: 'AI Voice Agents SaaS',
    description: 'Platform for creating and managing AI-powered voice agents for businesses.',
    role: 'Frontend Development',
    technologies: ['React.js', 'TypeScript', 'Websockets', 'AI APIs', 'Twilio'],
    link: 'https://kenvoice.ai',
    company: 'KenVoice',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Feature-rich e-commerce platform with inventory and order management.',
    role: 'Frontend & Backend',
    technologies: ['HTML', 'CSS', 'PostgreSQL', 'Express.js', 'Bootstrap'],
    link: 'https://ayo24x7.com',
    company: 'Ayo 24x7',
  },
  {
    title: 'Crypto Wallet Mobile App',
    description: 'Mobile application for cryptocurrency wallet management with secure transactions.',
    role: 'Mobile UI Development',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Vision Camera', 'Fingerprint Biometric'],
    link: '#',
    company: 'Vyntrics',
  },
  {
    title: 'Learning Management System',
    description: 'Complete LMS platform for online education with course management and student tracking.',
    role: 'Frontend Development',
    technologies: ['Next.js', 'TypeScript', 'Material UI', 'Ant Design', 'Tailwind CSS'],
    link: 'https://kiacademy.in',
    company: 'KI Academy',
  },
  {
    title: 'Service Providing ERP',
    description: 'Multi-language, multi-currency ERP system for service businesses with advanced reporting.',
    role: 'Frontend & Backend',
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'Express.js', 'AWS', 'Stripe'],
    link: '#',
    company: 'OOps 24x7',
  },
  {
    title: 'AI Exam Monitoring System',
    description: 'Advanced exam system with AI-powered proctoring, face detection, and attendance tracking.',
    role: 'Frontend & Backend',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'AI APIs', 'Fastify'],
    link: '#',
    company: 'AI Proctor',
  },
  {
    title: 'AI Physiotherapy System',
    description: 'AI-powered physiotherapy management system with exercise tracking and patient monitoring.',
    role: 'Frontend & Backend',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'AI/ML', 'WebRTC', "Express.js"],
    link: '#',
    company: 'Visionary Rehab',
  },
  {
    title: 'Marriage Hall & Banquet ERP',
    description: 'Custom ERP system for marriage halls and banquet centers with booking and inventory management.',
    role: 'Frontend & Backend',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', "Firebase"],
    link: 'https://tnc-erp.surge.sh',
    company: 'FPT ERP',
  },
  {
    title: 'E-Commerce Static Website',
    description: 'Modern, SEO-optimized e-commerce platform website.',
    role: 'Frontend Development',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'SEO', 'Easypaisa', "Jazzcash"],
    link: 'https://sellkar.pk',
    company: 'SellKar (Co-founder)',
  },
  {
    title: 'Tech Startup Website',
    description: 'Professional website for a tech startup company.',
    role: 'Frontend Development (CTO)',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
    link: 'https://technetcloud.co',
    company: 'TechNet Cloud (CTO)',
  },
  {
    title: 'Live Auctions Platform',
    description: 'Real-time auction platform with live bidding via WebSockets and live video streaming.',
    role: 'Backend Development',
    technologies: ['Node.js', 'Express.js', 'WebSocket', 'MongoDB', 'WebRTC'],
    link: 'https://myrtlebeachauction.net',
    company: 'Myrtle Beach Auction',
  },
  {
    title: 'Cruise Booking Platform',
    description: 'Booking platform like booking.com with up to 20 third-party platform integrations.',
    role: 'Backend Development',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Web Scrapping', 'Payment Gateway'],
    link: 'https://luxetravelplans.com/',
    company: 'Luxe Travel Plans',
  },
  {
    title: 'Gym Management Platform',
    description: 'Multi-location gym management system with member tracking, attendance, and billing. Supports 100k+ users.',
    role: 'Backend Development',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Third Party Integration', 'Azure'],
    link: 'https://bodyrok.com/',
    company: 'Body Rok',
  },
  {
    title: 'Full ERP System',
    description: 'Comprehensive ERP system with multi-language, multi-role, multi-currency, and multi-country support.',
    role: 'Frontend & Backend',
    technologies: ['React.js', 'MongoDB', 'Node.js', 'Express.js', 'AWS'],
    link: '#',
    company: 'Personal Project',
  },
  {
    title: 'Bus Booking System',
    description: 'Bus booking system with online payments, invoicing, and seat selection.',
    role: 'Frontend & Backend',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Express.js'],
    link: '#',
    company: 'SamBus',
  },
]

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold animate-slide-in-left">My Work</h1>
            <p className="text-xl text-foreground/60 max-w-2xl animate-slide-in-bottom">
              Over 8+ products built and delivered. From startup MVPs to enterprise-scale applications, here are some of the projects I&apos;ve worked on.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="accent-border-hover group h-full bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
              >
                {/* Header */}
                <div className="mb-4 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="accent-text-hover text-lg font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-foreground/50 font-medium">{project.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 mb-4">{project.description}</p>
                </div>

                {/* Role */}
                <div className="mb-4 pb-4 border-b border-border/40">
                  <p className="text-xs font-semibold text-foreground/50 mb-2">ROLE</p>
                  <p className="text-sm text-foreground/70">{project.role}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6 flex-1">
                  <p className="text-xs font-semibold text-foreground/50 mb-2">TECHNOLOGIES</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-primary/10 text-primary/80 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold transition-colors mt-auto group/link hover:opacity-70"
                    style={{ color: 'var(--purple-light)' }}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-12 lg:px-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-in-bottom" style={{ animationDelay: '0.1s' } as React.CSSProperties}>
              <p className="text-5xl font-bold mb-2" style={{ color: 'var(--purple-light)' }}>
                22+
              </p>
              <p className="text-foreground/60">Projects Delivered</p>
            </div>
            <div className="text-center animate-slide-in-bottom" style={{ animationDelay: '0.2s' } as React.CSSProperties}>
              <p className="text-5xl font-bold mb-2" style={{ color: 'var(--purple-light)' }}>
                3+
              </p>
              <p className="text-foreground/60">Years Experience</p>
            </div>
            <div className="text-center animate-slide-in-bottom" style={{ animationDelay: '0.3s' } as React.CSSProperties}>
              <p className="text-5xl font-bold mb-2" style={{ color: 'var(--purple-light)' }}>
                50+
              </p>
              <p className="text-foreground/60">Students Trained</p>
            </div>
            <div className="text-center animate-slide-in-bottom" style={{ animationDelay: '0.4s' } as React.CSSProperties}>
              <p className="text-5xl font-bold mb-2" style={{ color: 'var(--purple-light)' }}>
                8+
              </p>
              <p className="text-foreground/60">Products Built</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
