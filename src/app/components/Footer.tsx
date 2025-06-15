'use client'

import { Instagram, MessageCircle } from 'lucide-react';
import React from 'react'

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};


export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <button 
              onClick={() => scrollToSection('hero')}
              className="inline-block mb-6"
            >
              <span className="text-3xl font-light tracking-wider">
                B. BRAND
              </span>
            </button>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Moda contemporânea com elegância atemporal. 
              Criamos peças que transcendem tendências, 
              focando na qualidade e sofisticação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('hero')} className="text-white/80 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('lookbook')} className="text-white/80 hover:text-white transition-colors">Lookbook</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Contato</button></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-medium mb-6">Conecte-se</h4>
            <div className="space-y-4">
              <a 
                href="https://instagram.com/_bbrandstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>@_bbrandstore</span>
              </a>
              
              <a 
                href="https://wa.me/556792430339" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-sm font-medium mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 text-sm bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/40 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-white text-brand-primary text-sm font-medium hover:bg-white/90 transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 B. Brand Store. Todos os direitos reservados. | Feito por <a href="https://www.israelalencar.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Israel Alencar Dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
