import Link from 'next/link'
import {
  Mail,
  CodeXml
} from 'lucide-react'

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube as FaYoutube } from "react-icons/ai";

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/ahadsts9901',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/muhammad-ahad-3136b1236',
      icon: FaLinkedinIn,
    },
    {
      label: 'Email',
      href: 'mailto:muhammadahadansari2@gmail.com',
      icon: Mail,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/923130019086',
      icon: FaWhatsapp,
    },
    // {
    //   label: 'Instagram',
    //   href: 'https://instagram.com/ahadsts9901',
    //   icon: Share2,
    // },
    // {
    //   label: 'Facebook',
    //   href: 'https://www.facebook.com/abdulahad.ansari.1481',
    //   icon: FaFacebookF,
    // },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/@ahadsts9901',
      icon: FaYoutube,
    },
  ]

  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-foreground mb-2">
              <CodeXml className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <p className="text-sm text-foreground/60">
              Full-stack developer building modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a
                  href="https://github.com/ahadsts9901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/muhammad-ahad-3136b1236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@ahadsts9901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <p className="text-sm text-foreground/60 mb-4">
              Let&apos;s collaborate on something amazing.
            </p>
            <a
              href="mailto:muhammadahadansari2@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-muted text-foreground transition-colors"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
            <p>&copy; {currentYear} Muhammad Ahad. All rights reserved.</p>
            {/* <p>Designed & Built with Next.js + Tailwind CSS</p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
