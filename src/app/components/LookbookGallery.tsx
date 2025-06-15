import React from 'react'

export default function LookbookGallery() {
    const lookbookImages = [
        {
        id: 1,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
        title: "Elegância Contemporânea",
        description: "Simplicidade e sofisticação em cada detalhe"
        },
        {
        id: 2,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
        title: "Minimalismo Atemporal",
        description: "Peças que transcendem tendências e estações"
        },
        {
        id: 3,
        image: "https://images.unsplash.com/photo-1494790108755-268c7c8371d?auto=format&fit=crop&w=1200&q=80",
        title: "Essencial Moderno",
        description: "O fundamental para um guarda-roupa contemporâneo"
        },
        {
        id: 4,
        image: "https://images.unsplash.com/photo-1506629905607-b5f3d6b42087?auto=format&fit=crop&w=1200&q=80",
        title: "Sofisticação Natural",
        description: "Onde conforto encontra elegância"
        },
        {
        id: 5,
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        title: "Versatilidade Refinada",
        description: "Looks que se adaptam a cada momento"
        },
        {
        id: 6,
        image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1200&q=80",
        title: "Elegância Discreta",
        description: "A beleza está nos detalhes mais sutis"
        }
    ];

  return (
    <section id="lookbook" className="py-20 bg-gradient-to-br from-brand-secondary to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-light text-brand-primary mb-6">
          Lookbook
        </h2>
        <div className="w-8 h-px bg-brand-primary mx-auto mb-8"></div>
        <p className="text-xl text-brand-primary/80 leading-relaxed">
          Explore nossa visão de moda contemporânea através de momentos 
          únicos que capturam a essência da B. Brand.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lookbookImages.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden bg-brand-secondary/20 ${
                index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-lg font-light mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
