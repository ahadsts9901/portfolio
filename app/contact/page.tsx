'use client'

import { useState } from 'react'
import {
  Mail, MessageCircle, Phone
} from 'lucide-react'

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube as FaYoutube } from "react-icons/ai";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Simulate form submission
  //   console.log('Form submitted:', formData)
  //   setSubmitted(true)
  //   setTimeout(() => {
  //     setFormData({ name: '', email: '', message: '' })
  //     setSubmitted(false)
  //   }, 3000)
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch("https://script.google.com/macros/s/AKfycbyNc_sNFe1-oQZAfVxKmroGNlhbAVGB8Rngk__occknnDocR1vEVKQFa7sWqGfsp321/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData),
    })

    setSubmitted(true)

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      label: 'Email',
      value: 'muhammadahadansari2@gmail.com',
      href: 'mailto:muhammadahadansari2@gmail.com',
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '+92 313 0019086',
      href: 'tel:+923130019086',
      icon: Phone,
    },
    {
      label: 'WhatsApp',
      value: '+92 313 0019086',
      href: 'https://wa.me/923130019086',
      icon: FaWhatsapp,
    },
    {
      label: 'GitHub',
      value: '@ahadsts9901',
      href: 'https://github.com/ahadsts9901',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      value: 'Muhammad Ahad',
      href: 'https://linkedin.com/in/muhammad-ahad-3136b1236',
      icon: FaLinkedinIn,
    },
    // {
    //   label: 'Youtube',
    //   value: 'Bits With Ahad',
    //   href: 'https://instagram.com/ahadsts9901',
    //   icon: FaYoutube,
    // },
    {
      label: 'Youtube',
      value: 'Bits With Ahad',
      href: 'https://youtube.com/@ahadsts9901',
      icon: FaYoutube,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">Get in Touch</h1>
          <p className="text-xl text-foreground/70 animate-slide-in-bottom">
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-slide-in-left">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-background border border-border rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform text-lg font-semibold text-primary">
                    {/* {method.label.charAt(0)} */}
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{method.label}</p>
                    <p className="font-semibold text-foreground">{method.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 animate-slide-in-left">Let&apos;s collaborate</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Whether you&apos;re looking to build a new product, scale an existing one, or need technical guidance, I&apos;m here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <h3 className="font-bold text-foreground mb-2">Response Time</h3>
                <p className="text-foreground/70">I typically respond within 24 hours.</p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <h3 className="font-bold text-foreground mb-2">Availability</h3>
                <p className="text-foreground/70">Open to full-time roles, freelance projects, and consulting.</p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <h3 className="font-bold text-foreground mb-2">Location</h3>
                <p className="text-foreground/70">Karachi, Pakistan (UTC+5)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none transition-colors"
                  placeholder="Your name"
                  onFocus={(e) => e.target.style.borderColor = 'var(--purple-light)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  style={{ '--tw-border-color': 'var(--border)', '--focus-border': 'var(--purple-light)' } as React.CSSProperties}
                  onFocus={(e) => e.target.style.borderColor = 'var(--purple-light)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none transition-colors resize-none"
                  onFocus={(e) => e.target.style.borderColor = 'var(--purple-light)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-600 text-sm text-center animate-in fade-in">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 px-4 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-slide-in-left">Or reach me directly at:</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:muhammadahadansari2@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-80 border border-primary transition-all duration-300 font-semibold"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://wa.me/923130019086"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-80 border border-primary transition-all duration-300 font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="tel:+923130019086"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-80 border border-primary transition-all duration-300 font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
