import React, { useState } from 'react';

const MODULES = [
  {
    id: 1,
    name: 'Module 1',
    short: 'Autonomous component operating in sandbox.',
    title: 'Execution Sandbox',
    text: 'Agents execute generated codes within an isolated environment (sandbox), ensuring that no vulnerability affects the main infrastructure of the system.',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    icon: '1'
  },
  {
    id: 2,
    name: 'Module 2',
    short: 'Orchestration of multiple LLM models.',
    title: 'Model Routing',
    text: 'The system dynamically selects which AI to use (GPT-4, Claude, Gemini) based on the complexity of the problem, required speed, and operation cost.',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    icon: '2'
  },
  {
    id: 3,
    name: 'Module 3',
    short: 'Vector memory and historical context.',
    title: 'Continuous Memory',
    text: 'Agents access a vector database to retrieve contexts from past conversations and documentation, allowing infinite learning for the organization.',
    gradient: 'from-orange-400 via-red-500 to-rose-500',
    icon: '3'
  },
  {
    id: 4,
    name: 'Module 4',
    short: 'CI/CD and Code Review automation.',
    title: 'Autonomous Code Review',
    text: 'AI reviews Pull Requests, runs test pipelines, and merges completely autonomously, ensuring software quality without human bottlenecks.',
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    icon: '4'
  }
];

const HowItWorksSection = React.memo(({ animationClass, onNext }: { animationClass: string, onNext?: () => void }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeModule = activeIndex !== null ? MODULES[activeIndex] : null;

  return (
    <section className={`absolute inset-0 flex flex-col items-center px-4 md:px-10 w-full ${animationClass} pt-[22vh] overflow-y-auto overflow-x-hidden pb-10`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-[2000px]:gap-16 min-[3840px]:gap-24 w-full max-w-6xl min-[2000px]:max-w-8xl min-[3840px]:max-w-[140rem]">
        
        {/* Esquerda: Card Grande */}
        <div className="flex flex-col justify-between p-8 md:p-12 min-[2000px]:p-20 min-[3840px]:p-32 rounded-[2.5rem] min-[3840px]:rounded-[5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] min-h-[300px] md:min-h-[500px] min-[2000px]:min-h-[800px] min-[3840px]:min-h-[1400px] transition-all duration-500 relative overflow-hidden">
          {/* Default Content */}
          <div className={`absolute inset-0 p-8 md:p-12 min-[2000px]:p-20 min-[3840px]:p-32 flex flex-col justify-between transition-opacity duration-500 ${activeIndex === null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <h2 className="text-4xl md:text-6xl min-[2000px]:text-7xl min-[3840px]:text-[8rem] font-bold text-white tracking-tight leading-tight">
              Agent<br className="hidden md:block"/> Architecture
            </h2>
            <p className="text-slate-400 text-lg md:text-xl min-[2000px]:text-3xl min-[3840px]:text-5xl font-light">
              Our modules work collaboratively and autonomously, scaling the capacity of your team. Click on the modules aside to explore.
            </p>
          </div>

          {/* Dynamic Content */}
          <div className={`absolute inset-0 p-8 md:p-12 min-[2000px]:p-20 min-[3840px]:p-32 flex flex-col justify-between transition-opacity duration-500 ${activeIndex !== null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <h2 className="text-4xl md:text-5xl min-[2000px]:text-6xl min-[3840px]:text-[7rem] font-bold text-white tracking-tight leading-tight">
              {activeModule?.title}
            </h2>
            <p className="text-slate-300 text-lg md:text-xl min-[2000px]:text-3xl min-[3840px]:text-5xl font-light leading-relaxed">
              {activeModule?.text}
            </p>
          </div>
        </div>

        {/* Direita: Modulos */}
        <div className="flex flex-col gap-6 min-[2000px]:gap-10 min-[3840px]:gap-16">
          {/* Card Superior com Gradiente Dinâmico */}
          <div className={`p-6 md:p-8 min-[2000px]:p-12 min-[3840px]:p-20 rounded-[2rem] min-[3840px]:rounded-[4rem] bg-gradient-to-br shadow-xl min-h-[120px] md:min-h-[140px] min-[2000px]:min-h-[200px] min-[3840px]:min-h-[300px] flex flex-col justify-end transition-all duration-700 ease-in-out ${activeModule ? activeModule.gradient : 'from-slate-700 via-slate-800 to-slate-900'}`}>
            <h3 className="text-2xl md:text-3xl min-[2000px]:text-5xl min-[3840px]:text-[5rem] font-bold text-white leading-tight tracking-tight transition-all duration-300">
              {activeModule ? activeModule.name : 'Select a Module'}
            </h3>
          </div>

          {/* Lista de Modulos */}
          <div className="flex flex-col gap-4 min-[2000px]:gap-8 min-[3840px]:gap-12">
            {MODULES.map((mod, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button 
                  key={mod.id} 
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className={`text-left flex items-center gap-4 min-[2000px]:gap-8 min-[3840px]:gap-12 p-4 min-[2000px]:p-8 min-[3840px]:p-12 rounded-2xl min-[3840px]:rounded-[3rem] border transition-all duration-300 group ${
                    isActive 
                      ? 'bg-white/15 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-12 h-12 min-[2000px]:w-20 min-[2000px]:h-20 min-[3840px]:w-32 min-[3840px]:h-32 rounded-full min-[2000px]:text-2xl min-[3840px]:text-5xl flex items-center justify-center font-bold transition-all duration-300 ${
                    isActive ? 'bg-white text-black scale-110 shadow-lg' : 'bg-black/30 text-white group-hover:scale-110'
                  }`}>
                    {mod.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold min-[2000px]:text-2xl min-[3840px]:text-5xl transition-colors ${isActive ? 'text-white' : 'text-slate-200'}`}>{mod.name}</h4>
                    <p className={`text-sm min-[2000px]:text-xl min-[3840px]:text-3xl transition-colors ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{mod.short}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Botão de Próximo */}
      {onNext && (
        <div className="mt-8 mb-4 min-[3840px]:mt-16">
          <button 
            onClick={onNext}
            className="group relative inline-flex items-center justify-center px-10 py-4 min-[2000px]:px-16 min-[2000px]:py-6 min-[3840px]:px-24 min-[3840px]:py-10 min-[2000px]:text-2xl min-[3840px]:text-5xl font-bold text-white transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
          >
            Continue
          </button>
        </div>
      )}
    </section>
  );
});

export default HowItWorksSection;
