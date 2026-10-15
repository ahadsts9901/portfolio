'use client'

import Link from 'next/link'
import { ArrowUpRight, Code2, Database, MoveUpRight, Radio, Terminal } from 'lucide-react'
import { InteractionScripts, Magnetic, Reveal } from '@/components/ambient-canvas'

const expertise = [
  { icon: Code2, index: '01', title: 'Interface systems', text: 'Purposeful interfaces with a focus on speed, clarity, and memorable details.', tags: ['React', 'Next.js', 'TypeScript'] },
  { icon: Database, index: '02', title: 'Backend architecture', text: 'Reliable infrastructure that scales with the product, not against it.', tags: ['Node.js', 'PostgreSQL', 'APIs'] },
  { icon: Terminal, index: '03', title: 'Technical leadership', text: 'Shipping culture, clear systems, and teams that move with intent.', tags: ['AWS', 'CI/CD', 'Mentoring'] },
]

const projects = [
  { number: '001', title: 'E-Commerce Platform', type: 'PRODUCT / FULL-STACK', text: 'A conversion-focused commerce system with payments, inventory, and real-time updates.', stack: 'React · Node.js · MongoDB', href: 'https://mern-store-gold.vercel.app' },
  { number: '002', title: 'Coupon Intelligence', type: 'SAAS / PLATFORM', text: 'A multilingual ERP and analytics platform built for modern retail operators.', stack: 'Next.js · AWS · Redux', href: 'https://coupzone.com' },
]

export default function Home() {
  return (
    <div className="site-shell">
      <InteractionScripts />
      <section className="hero-section page-grid">
        <div className="hero-kicker"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="hero-year">© 2026</span></div>
        <div className="hero-content">
          <Reveal><p className="eyebrow">FULL-STACK DEVELOPER / BUILDER</p></Reveal>
          <Reveal className="hero-title-wrap"><h1 className="hero-title">Ideas into<br /><span className="outline-text">interfaces.</span></h1></Reveal>
          <Reveal className="hero-copy-wrap"><p className="hero-copy">I&apos;m Muhammad Ahad — a product-minded engineer building sharp digital experiences and scalable systems for ambitious teams.</p></Reveal>
          <Reveal className="hero-actions"><Magnetic><Link href="/work" className="button button-solid">Explore selected work <ArrowUpRight size={16} /></Link></Magnetic><Magnetic><Link href="/contact" className="button button-ghost">Start a conversation <MoveUpRight size={16} /></Link></Magnetic></Reveal>
        </div>
        <div className="hero-side-note">SCROLL TO<br />DISCOVER <span>↓</span></div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="marquee-strip" aria-label="Services"><div>DESIGNING FORWARD — ENGINEERING WITH INTENT — BUILDING WHAT&apos;S NEXT — DESIGNING FORWARD — ENGINEERING WITH INTENT —</div></section>

      <section className="section page-grid" id="expertise">
        <div className="section-label"><span>02</span> / EXPERTISE</div>
        <div className="section-main"><Reveal><h2 className="section-heading">The craft<br /><span className="muted-heading">behind the work.</span></h2></Reveal><div className="expertise-grid">{expertise.map(({ icon: Icon, index, title, text, tags }) => <Reveal key={title} className="expertise-card"><div className="card-top"><span>{index}</span><Icon size={20} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></Reveal>)}</div></div>
      </section>

      <section className="section projects-section page-grid"><div className="section-label"><span>03</span> / SELECTED WORK</div><div className="section-main"><div className="section-heading-row"><Reveal><h2 className="section-heading">Selected<br /><span className="muted-heading">signals.</span></h2></Reveal><Link href="/work" className="text-link">View all work <ArrowUpRight size={15} /></Link></div><div className="projects-list">{projects.map((project) => <Reveal key={project.number} className="project-card"><div className="project-number">{project.number}</div><div className="project-info"><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p>{project.text}</p><span className="project-stack">{project.stack}</span></div><a href={project.href} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.title}`}><ArrowUpRight size={24} /></a></Reveal>)}</div></div></section>

      <section className="contact-banner page-grid"><div className="section-label"><span>04</span> / NEXT MOVE</div><div className="contact-main"><p className="eyebrow">HAVE A GOOD ONE?</p><h2>Let&apos;s make<br /><span>something real.</span></h2><Link href="/contact" className="button button-solid">Get in touch <ArrowUpRight size={16} /></Link></div><div className="contact-meta"><a href="mailto:ahadsts@gmail.com">ahadsts@gmail.com</a><div className="social-row"><a href="https://github.com/ahadsts9901" aria-label="GitHub">GH</a><a href="https://linkedin.com/in/ahadsts9901" aria-label="LinkedIn">IN</a><Radio size={18} /></div></div></section>
    </div>
  )
}
