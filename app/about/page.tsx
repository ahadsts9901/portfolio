import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'About Me | Muhammad Ahad',
  description: 'Learn about my background, experience, and journey as a full-stack developer.',
}

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Redux', 'React Query', 'React Native'],
  backend: ['Node.js', 'Express.js', 'NestJS', 'Fastify', 'PostgreSQL', 'MongoDB', 'Firebase', 'GraphQL'],
  devops: ['Docker', 'AWS', 'Azure', 'Google Cloud', 'CI/CD', 'Vercel', 'Netlify', 'Render'],
  other: ['Python', 'Solidity', 'Django', 'FastAPI', 'Web3', 'Git', 'REST APIs', 'Payment Gateways'],
}

const experience = [
  {
    company: 'DevXtech',
    position: 'Senior Backend Developer',
    period: 'FEB 2026 - PRESENT',
    description: 'Led backend development initiatives, integrating third-party services, designing database architectures, and implementing best practices for code quality and system security.',
  },
  {
    company: 'Saylani Mass IT Training',
    position: 'MERN Stack Trainer',
    period: 'SEP 2025 - PRESENT',
    description: 'Conducting hands-on training sessions on building full-stack applications. Guided 50+ students in developing scalable web applications using modern technologies.',
  },
  {
    company: 'KENZ Innovations',
    position: 'Full Stack Developer & DevOps Engineer',
    period: 'OCT 2024 - FEB 2026',
    description: 'Developed responsive and high-performance user interfaces. Built and maintained scalable server-side applications with secure authentication and optimized performance.',
  },
  {
    company: 'EAI Soft',
    position: 'Junior Full Stack Developer',
    period: 'DEC 2023 - OCT 2024',
    description: 'Designed and developed end-to-end web applications with a focus on performance and user experience. Built and integrated secure, scalable APIs.',
  },
  {
    company: 'The One Digit',
    position: 'Backend Developer & DevOps Engineer',
    period: 'JULY 2023 - DEC 2023',
    description: 'Designed and developed secure, scalable backend systems. Engineered multiple products including ERP systems, auction platforms, and gym management systems.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">About Me</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            I&apos;m a full-stack developer from Karachi, Pakistan, with 3+ years of experience building scalable web applications. I&apos;m passionate about creating elegant solutions to complex problems and mentoring the next generation of developers.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-card border-y border-border md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">My Journey</h2>
          <div className="space-y-8">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I started my development journey with a passion for building web applications. What began as curiosity about how websites work has evolved into a comprehensive skill set spanning frontend, backend, and DevOps engineering.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Over the years, I&apos;ve had the privilege of working on diverse projects—from startup MVPs to enterprise-scale applications. Each project taught me something valuable about software architecture, team collaboration, and business impact.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Today, I lead backend development initiatives at DevXtech while mentoring students at Saylani Mass IT Training. I co-founded a couple of startups (SellKar and TechNet Cloud) and am deeply involved in the Pakistani tech community.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 animate-slide-in-left">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="border-l-2 border-purple-400 pl-8 hover:border-purple-300 transition-colors animate-slide-in-bottom"
                style={{ '--tw-border-opacity': '0.3', animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{job.position}</h3>
                    <p className="font-semibold" style={{ color: 'var(--purple-light)' }}>{job.company}</p>
                  </div>
                  <p className="text-sm text-foreground/60 font-medium whitespace-nowrap">{job.period}</p>
                </div>
                <p className="text-foreground/70">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-12 lg:px-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 animate-slide-in-left">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frontend */}
            <div className="animate-slide-in-bottom" style={{ animationDelay: '0.1s' } as React.CSSProperties}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-8 rounded" style={{ backgroundColor: 'var(--purple-light)' }} />
                Frontend
              </h3>
              <div className="space-y-3">
                {skills.frontend.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--purple-light)' }} />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="animate-slide-in-bottom" style={{ animationDelay: '0.2s' } as React.CSSProperties}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-8 rounded" style={{ backgroundColor: 'var(--purple-light)' }} />
                Backend
              </h3>
              <div className="space-y-3">
                {skills.backend.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--purple-light)' }} />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="animate-slide-in-bottom" style={{ animationDelay: '0.3s' } as React.CSSProperties}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-8 rounded" style={{ backgroundColor: 'var(--purple-light)' }} />
                DevOps & Cloud
              </h3>
              <div className="space-y-3">
                {skills.devops.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--purple-light)' }} />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other */}
            <div className="animate-slide-in-bottom" style={{ animationDelay: '0.4s' } as React.CSSProperties}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-8 rounded" style={{ backgroundColor: 'var(--purple-light)' }} />
                Other
              </h3>
              <div className="space-y-3">
                {skills.other.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--purple-light)' }} />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 animate-slide-in-left">Currently Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-purple-400 transition-colors animate-slide-in-bottom" style={{ animationDelay: '0.2s' } as React.CSSProperties}>
              <h3 className="text-2xl font-bold mb-3">DSA (Data Structures & Algorithms)</h3>
              <p className="text-foreground/70">
                Strengthening my problem-solving skills and preparing for advanced system design challenges.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-purple-400 transition-colors animate-slide-in-bottom" style={{ animationDelay: '0.3s' } as React.CSSProperties}>
              <h3 className="text-2xl font-bold mb-3">Blockchain & Web3</h3>
              <p className="text-foreground/70">
                Exploring decentralized applications, smart contracts, and the future of web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-12 lg:px-20 bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl font-bold">Let&apos;s Work Together</h2>
            <p className="text-lg text-foreground/60">
              I&apos;m always interested in discussing new projects and innovative ideas.
            </p>
          </div>
          <a
            href="mailto:muhammadahadansari2@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-80 transition-all duration-300"
            style={{ backgroundColor: 'var(--purple-light)', color: '#000000' }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
