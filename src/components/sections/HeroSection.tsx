import React from 'react';

const HeroSection = React.memo(({ animationClass, onNext }: { animationClass: string, onNext?: () => void }) => {
  return (
    <section className={`absolute inset-0 flex flex-col items-center px-6 w-full ${animationClass} pt-[30vh] pb-10 overflow-y-auto`}>
      <div className="flex flex-col items-center max-w-5xl min-[2000px]:max-w-7xl min-[3840px]:max-w-[120rem] w-full text-center">
        {/* Titulo */}
        <h1 className="text-5xl md:text-7xl min-[2000px]:text-8xl min-[3840px]:text-[8rem] font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl leading-tight">
          Agentic Autonomous<br className="hidden md:block" /> Organization
        </h1>

        {/* Subtitulo / Contexto IA */}
        <p className="text-lg md:text-xl min-[2000px]:text-3xl min-[3840px]:text-5xl text-slate-400 max-w-2xl min-[2000px]:max-w-4xl min-[3840px]:max-w-7xl mx-auto font-light mb-16 leading-relaxed">
          An open source foundation focused on the orchestration of <strong className="text-white font-medium">Autonomous AI Agents</strong>. Unlock the power of distributed development.
        </p>

        {/* Action Button */}
        {onNext && (
          <button 
            onClick={onNext}
            className="group relative inline-flex items-center justify-center px-10 py-4 min-[2000px]:px-16 min-[2000px]:py-6 min-[3840px]:px-24 min-[3840px]:py-10 min-[2000px]:text-2xl min-[3840px]:text-5xl font-bold text-white transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] mt-4"
          >
            Start
          </button>
        )}
      </div>
    </section>
  );
});

export default HeroSection;
