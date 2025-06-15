'use client'

import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import React, { useState } from 'react'

export default function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      caption: "Essencial para seu guarda-roupa contemporâneo ✨",
      likes: 245,
      date: "2024-06-10"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      caption: "Minimalismo que fala por si só 🤍",
      likes: 189,
      date: "2024-06-08"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1494790108755-268c7c8371d?auto=format&fit=crop&w=800&q=80",
      caption: "Elegância atemporal em cada detalhe 💫",
      likes: 312,
      date: "2024-06-05"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506629905607-b5f3d6b42087?auto=format&fit=crop&w=800&q=80",
      caption: "Conforto e sofisticação unidos 🌟",
      likes: 156,
      date: "2024-06-03"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      caption: "Versatilidade para todos os momentos ✨",
      likes: 278,
      date: "2024-06-01"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === instagramPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? instagramPosts.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-brand-primary mb-6">
            @_bbrandstore
          </h2>
          <div className="w-8 h-px bg-brand-primary mx-auto mb-6"></div>
          <p className="text-lg text-brand-primary/70 mb-8">
            Acompanhe nossos últimos looks no Instagram
          </p>
          <a
            href="https://instagram.com/_bbrandstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>Seguir no Instagram</span>
          </a>
        </div>

        {/* Carousel */}
        <div className="relative max-w-md mx-auto">
          {/* Main Image */}
          <div className="relative aspect-square overflow-hidden bg-brand-secondary/20 mb-4">
            <img
              src={instagramPosts[currentIndex].image}
              alt={`Post ${instagramPosts[currentIndex].id}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-primary rounded-full p-2 transition-colors shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-primary rounded-full p-2 transition-colors shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Post Info */}
          <div className="text-center mb-6">
            <p className="text-brand-primary mb-2">
              {instagramPosts[currentIndex].caption}
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-brand-primary/60">
              <span>❤️ {instagramPosts[currentIndex].likes}</span>
              <span>{new Date(instagramPosts[currentIndex].date).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            {instagramPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-brand-primary' 
                    : 'bg-brand-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
