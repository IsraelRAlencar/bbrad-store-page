import { MessageCircle } from 'lucide-react'
import React from 'react'

export default function ContactButton() {
  return (
    <a href="https://api.whatsapp.com/message/4TEHWV6JNX6KK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="rounded-lg inline-flex items-center space-x-3 border-2 border-brand-primary text-brand-primary px-8 py-4 font-medium hover:bg-brand-primary hover:text-white transition-all duration-300 group">
        <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
        <span>Fale Conosco</span>
    </a>
  )
}
