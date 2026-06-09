'use client'

import { useState, useEffect } from 'react'

const COLOR_PALETTE = [
  { name: 'Purple', light: '#a78bfa', dark: '#c4b5fd', primary: '#7c3aed', hover: '#a855f7' },
  { name: 'Blue', light: '#60a5fa', dark: '#93c5fd', primary: '#2563eb', hover: '#3b82f6' },
  { name: 'Pink', light: '#f472b6', dark: '#fbcfe8', primary: '#ec4899', hover: '#f43f5e' },
  { name: 'Green', light: '#4ade80', dark: '#86efac', primary: '#22c55e', hover: '#16a34a' },
  { name: 'Orange', light: '#fb923c', dark: '#fed7aa', primary: '#f97316', hover: '#ea580c' },
  { name: 'Red', light: '#f87171', dark: '#fca5a5', primary: '#ef4444', hover: '#dc2626' },
  { name: 'Teal', light: '#14b8a6', dark: '#99f6e4', primary: '#0d9488', hover: '#0f766e' },
  { name: 'Indigo', light: '#818cf8', dark: '#c7d2fe', primary: '#4f46e5', hover: '#4338ca' },
]

export function useAccentColor() {
  const [color, setColor] = useState(COLOR_PALETTE[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('accentColor')
    if (saved) {
      const foundColor = COLOR_PALETTE.find((c) => c.name === saved)
      if (foundColor) {
        setColor(foundColor)
      }
    }
  }, [])

  if (!mounted) {
    return COLOR_PALETTE[0]
  }

  return color
}

export function getAccentColorSync() {
  if (typeof window === 'undefined') return COLOR_PALETTE[0]
  const saved = localStorage.getItem('accentColor')
  if (saved) {
    const foundColor = COLOR_PALETTE.find((c) => c.name === saved)
    if (foundColor) return foundColor
  }
  return COLOR_PALETTE[0]
}
