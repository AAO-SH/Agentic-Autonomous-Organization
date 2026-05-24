import React, { useState } from 'react';

const MODULES = [
  {
    id: 1,
    name: 'Módulo 1',
    short: 'Componente autonômo operando em sandbox.',
    title: 'Sandbox de Execução',
    text: 'Os agentes executam códigos gerados dentro de um ambiente isolado (sandbox), garantindo que nenhuma vulnerabilidade afete a infraestrutura principal do sistema.',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    icon: '1'
  },
  {
    id: 2,
    name: 'Módulo 2',
    short: 'Orquestração de múltiplos modelos LLM.',
    title: 'Roteamento de Modelos',
    text: 'O sistema seleciona dinamicamente qual IA utilizar (GPT-4, Claude, Gemini) com base na complexidade do problema, velocidade necessária e custo da operação.',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    icon: '2'
  },
  {
    id: 3,
    name: 'Módulo 3',
    short: 'Memória vetorial e contexto histórico.',
    title: 'Memória Contínua',
    text: 'Agentes acessam um banco de dados vetorial para recuperar contextos de conversas passadas e documentações, permitindo aprendizado infinito para a organização.',
    gradient: 'from-orange-400 via-red-500 to-rose-500',
    icon: '3'
  },
  {
    id: 4,
    name: 'Módulo 4',
    short: 'Automação de CI/CD e Code Review.',
    title: 'Code Review Autônomo',
    text: 'A IA revisa Pull Requests, roda pipelines de teste e realiza merge de forma completamente autônoma, garantindo qualidade de software sem gargalos humanos.',
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    icon: '4'
  }
];

const HowItWorksSection = React.memo(({ animationClass, onNext }: { animationClass: string, onNext?: () => void }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeModule = activeIndex !== null ? MODULES[activeIndex] : null;

  return (
    <section className={`absolute inset-0 flex flex-col items-center px-4 md:px-10 w-full ${animationClass} pt-[22vh] overflow-y-auto overflow-x-hidden pb-10`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        
        {/* Esquerda: Card Grande */}
        <div className="flex flex-col justify-between p-8 md:p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] min-h-[400px] md:min-h-[500px] transition-all duration-500 relative overflow-hidden">
          {/* Default Content */}
          <div className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-between transition-opacity duration-500 ${activeIndex === null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Arquitetura<br className="hidden md:block"/> de Agentes
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light">
              Nossos módulos trabalham de forma colaborativa e autônoma, escalando a capacidade do seu time. Clique nos módulos ao lado para explorar.
            </p>
          </div>

          {/* Dynamic Content */}
          <div className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-between transition-opacity duration-500 ${activeIndex !== null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {activeModule?.title}
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              {activeModule?.text}
            </p>
          </div>
        </div>

        {/* Direita: Modulos */}
        <div className="flex flex-col gap-6">
          {/* Card Superior com Gradiente Dinâmico */}
          <div className={`p-6 md:p-8 rounded-[2rem] bg-gradient-to-br shadow-xl min-h-[120px] md:min-h-[140px] flex flex-col justify-end transition-all duration-700 ease-in-out ${activeModule ? activeModule.gradient : 'from-slate-700 via-slate-800 to-slate-900'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight transition-all duration-300">
              {activeModule ? activeModule.name : 'Selecione um Módulo'}
            </h3>
          </div>

          {/* Lista de Modulos */}
          <div className="flex flex-col gap-4">
            {MODULES.map((mod, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button 
                  key={mod.id} 
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className={`text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group ${
                    isActive 
                      ? 'bg-white/15 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    isActive ? 'bg-white text-black scale-110 shadow-lg' : 'bg-black/30 text-white group-hover:scale-110'
                  }`}>
                    {mod.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold transition-colors ${isActive ? 'text-white' : 'text-slate-200'}`}>{mod.name}</h4>
                    <p className={`text-sm transition-colors ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{mod.short}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Botão de Próximo */}
      {onNext && (
        <div className="mt-8 mb-4">
          <button 
            onClick={onNext}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
          >
            Continuar
          </button>
        </div>
      )}
    </section>
  );
});

export default HowItWorksSection;
