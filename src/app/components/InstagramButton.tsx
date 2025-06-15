import { Instagram } from 'lucide-react'
import React from 'react'

export default function InstagramButton() {
  return (
    <a href="https://instagram.com/_bbrandstore" target="_blank" rel="noopener noreferrer" className="rounded-lg inline-flex items-center space-x-3 bg-brand-primary hover:border-brand-primary hover:border hover:bg-transparent hover:text-brand-primary text-white px-8 py-4 font-medium transition-all duration-300 hover:shadow-lg group">
        <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
        <span>Siga no Instagram</span>
    </a>
  )
}
