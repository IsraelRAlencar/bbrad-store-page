import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-light text-brand-primary mb-6">
            Sobre a B. Brand
          </h2>
          <div className="w-8 h-px bg-brand-primary mx-auto mb-8"></div>
          <p className="text-xl text-brand-primary/80 leading-relaxed">
            Uma marca que nasceu da paixão por criar peças atemporais 
            e elegantes para mulheres contemporâneas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
          <div>
            <h3 className="text-2xl font-light text-brand-primary mb-6">
              Nossa História
            </h3>
            <div className="w-12 h-px bg-brand-primary mb-6"></div>
            <p className="text-brand-primary/80 leading-relaxed mb-6">
              A B. Brand nasceu da necessidade de criar peças que transcendem 
              tendências passageiras. Fundada com a missão de oferecer moda 
              contemporânea com elegância atemporal, focamos na qualidade 
              excepcional e no design minimalista.
            </p>
            <p className="text-brand-primary/80 leading-relaxed">
              Cada peça é cuidadosamente desenvolvida para mulheres que 
              valorizam sofisticação, conforto e versatilidade em seu 
              guarda-roupa diário.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/sobre_nos.jpg"
              alt="B. Brand Story"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary/10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-full"></div>
            </div>
            <h4 className="text-xl font-medium text-brand-primary mb-4">
              Qualidade
            </h4>
            <p className="text-brand-primary/70 leading-relaxed">
              Utilizamos apenas materiais premium e técnicas de confecção 
              que garantem durabilidade e conforto excepcionais.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-full"></div>
            </div>
            <h4 className="text-xl font-medium text-brand-primary mb-4">
              Atemporalidade
            </h4>
            <p className="text-brand-primary/70 leading-relaxed">
              Criamos peças que transcendem tendências, mantendo-se 
              relevantes e elegantes ao longo do tempo.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-full"></div>
            </div>
            <h4 className="text-xl font-medium text-brand-primary mb-4">
              Sustentabilidade
            </h4>
            <p className="text-brand-primary/70 leading-relaxed">
              Comprometidos com práticas responsáveis que respeitam 
              o meio ambiente e as pessoas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
