import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2, Zap, Users } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <Image
              src="/profile.png"
              alt="Muhammad Ahad"
              width={200}
              height={200}
              priority
              className="relative rounded-2xl w-48 h-48 object-cover border-4 border-cyan-500/20"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Hello, I&apos;m{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Muhammad Ahad
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 text-balance">
              Full-stack developer passionate about building scalable web applications and leading technical teams
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="bg-card border border-border/40 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                3+
              </p>
              <p className="text-sm text-foreground/60">Years Experience</p>
            </div>
            <div className="bg-card border border-border/40 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                8+
              </p>
              <p className="text-sm text-foreground/60">Products Built</p>
            </div>
            <div className="bg-card border border-border/40 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                50+
              </p>
              <p className="text-sm text-foreground/60">Students Trained</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border/40 hover:bg-secondary transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="group bg-background border border-border/40 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
              <p className="text-foreground/60 mb-6">
                Building responsive, high-performance user interfaces with React, Next.js, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="group bg-background border border-border/40 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
              <p className="text-foreground/60 mb-6">
                Designing scalable server architectures with Node.js, Express, NestJS, and database optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'NestJS', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Leadership */}
            <div className="group bg-background border border-border/40 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DevOps & Leadership</h3>
              <p className="text-foreground/60 mb-6">
                Managing deployment pipelines, mentoring teams, and architecting enterprise solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS', 'CI/CD', 'Team Leadership'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <Link
              href="/work"
              className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-semibold transition-colors"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group bg-gradient-to-br from-card to-background border border-border/40 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="h-48 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/20 to-blue-600/20" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">E-Commerce Platform</h3>
                <p className="text-foreground/60 mb-6">
                  Full-stack MERN application with payment gateway integration, inventory management, and real-time inventory updates.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Node.js', 'MongoDB', 'Stripe'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://mern-store-gold.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-semibold transition-colors"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-gradient-to-br from-card to-background border border-border/40 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="h-48 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/20 to-blue-600/20" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">SaaS Coupon Platform</h3>
                <p className="text-foreground/60 mb-6">
                  Multi-language, multi-currency ERP system with advanced couponing, analytics dashboard, and vendor management.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'PostgreSQL', 'AWS', 'React Query'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://coupzone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-semibold transition-colors"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 border-y border-border/40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Ready to Build Something Great?</h2>
            <p className="text-lg text-foreground/60">
              Let&apos;s collaborate on your next project and bring your ideas to life.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
