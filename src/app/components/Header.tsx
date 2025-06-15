'use client'

import { Instagram, Menu, MessageCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
        }
    };

    const navigation = [
        { name: 'Home', id: 'hero' },
        { name: 'Lookbook', id: 'lookbook' },
        { name: 'Sobre', id: 'about' },
        { name: 'Contato', id: 'contact' },
    ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-8 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex-shrink-0"
          >
            <span className="text-2xl lg:text-3xl font-light tracking-wider text-brand-primary">
              B. BRAND
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-colors duration-200 hover:text-white text-brand-primary/80"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://instagram.com/_bbrandstore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-brand-secondary rounded-full transition-colors"
            >
              <Instagram className="h-5 w-5 text-brand-primary" />
            </a>
            <a 
              href="https://wa.me/556792430339" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-brand-secondary rounded-full transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-brand-primary" />
            </a>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-brand-secondary rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5 text-brand-primary" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-brand-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-brand-primary hover:text-brand-primary/70 hover:bg-brand-secondary rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
