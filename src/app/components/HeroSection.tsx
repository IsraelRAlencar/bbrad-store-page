import React from 'react'
import InstagramButton from './InstagramButton';
import ContactButton from './ContactButton';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-secondary to-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero_image.jpg"
          alt="Fashion background"
          className="w-full h-full object-cover opacity-50"
          priority
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/60 to-white/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23666%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Logo */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-brand-primary mb-4">
            B. BRAND
          </h1>
          <div className="w-24 h-px bg-brand-primary mx-auto mb-6"></div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-brand-primary/80 font-light mb-12 leading-relaxed">
          Moda contemporânea com elegância atemporal
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <InstagramButton />
          <ContactButton />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-8 bg-brand-primary/30"></div>
          <div className="w-2 h-2 bg-brand-primary rounded-full mx-auto mt-2"></div>
        </div>
      </div>
    </section>
  );
}
