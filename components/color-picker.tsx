'use client'

import { useEffect, useState } from 'react'
import { Palette } from 'lucide-react'

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

export function ColorPicker() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(COLOR_PALETTE[0])

  useEffect(() => {
    setMounted(true)
    // Load saved color from localStorage
    const saved = localStorage.getItem('accentColor')
    if (saved) {
      const color = COLOR_PALETTE.find((c) => c.name === saved)
      if (color) {
        setSelectedColor(color)
        applyColor(color)
      }
    } else {
      applyColor(COLOR_PALETTE[0])
    }
  }, [])

  const applyColor = (color: typeof COLOR_PALETTE[0]) => {
    document.documentElement.style.setProperty('--purple-light', color.light)
    document.documentElement.style.setProperty('--purple-dark', color.dark)
    document.documentElement.style.setProperty('--accent-primary', color.primary)
    document.documentElement.style.setProperty('--accent-hover', color.hover)
  }

  const handleColorChange = (color: typeof COLOR_PALETTE[0]) => {
    setSelectedColor(color)
    applyColor(color)
    localStorage.setItem('accentColor', color.name)
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors flex items-center gap-2"
        aria-label="Color palette"
        title="Change accent color"
      >
        <Palette className="w-5 h-5 text-foreground" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-4 z-50 w-48">
          <p className="text-sm font-semibold text-foreground mb-3">Accent Color</p>
          <div className="grid grid-cols-4 gap-2">
            {COLOR_PALETTE.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorChange(color)}
                className={`w-8 h-8 rounded-lg transition-all ${
                  selectedColor.name === color.name
                    ? 'ring-2 ring-foreground scale-110'
                    : 'hover:scale-105'
                }`}
                style={{ backgroundColor: color.light }}
                title={color.name}
                aria-label={`${color.name} color`}
              />
            ))}
          </div>
          <p className="text-xs text-foreground/60 mt-3">{selectedColor.name}</p>
        </div>
      )}
    </div>
  )
}
