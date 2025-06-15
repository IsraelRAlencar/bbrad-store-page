import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import React from 'react'
import ContactButton from './ContactButton';
import InstagramButton from './InstagramButton';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-brand-secondary/30">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-light text-brand-primary mb-6">
            Conecte-se Conosco
          </h2>
          <div className="w-8 h-px bg-brand-primary mx-auto mb-8"></div>
          <p className="text-md text-brand-primary/80 leading-relaxed">
            Acompanhe nossa jornada e descubra mais sobre o universo B. Brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-medium text-brand-primary mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-brand-primary/80">
                <Mail className="h-5 w-5" />
                <span>contato@bbrand.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-primary/80">
                <MapPin className="h-5 w-5" />
                <span>Campo Grande, MS - Brasil</span>
              </div>
            </div>
          </div>

          <div className='mx-auto'>
            <h3 className="text-xl font-medium text-brand-primary mb-6">
              Redes Sociais
            </h3>
            <div className="space-y-4">
              <a href="https://instagram.com/_bbrandstore" target="_blank" rel="noopener noreferrer"className="flex items-center space-x-3 text-brand-primary/80 hover:text-brand-primary transition-colors group">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>@_bbrandstore</span>
              </a>
              
              <a href="https://wa.me/556792430339" target="_blank" rel="noopener noreferrer"className="flex items-center space-x-3 text-brand-primary/80 hover:text-brand-primary transition-colors group">
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InstagramButton />
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
}
