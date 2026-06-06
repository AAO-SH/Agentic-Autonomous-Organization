import React from 'react';

interface EcosystemSectionProps {
  animationClass: string;
  onNext?: () => void;
}

const EcosystemSection = React.memo(({ animationClass, onNext }: EcosystemSectionProps) => {
  return (
    <section className={`absolute inset-0 flex flex-col items-center px-6 w-full ${animationClass} pt-[22vh] pb-10 overflow-y-auto`}>
      <div className="flex flex-col items-center max-w-5xl min-[2000px]:max-w-7xl min-[3840px]:max-w-[140rem] w-full text-center">
        
        <h2 className="text-4xl md:text-6xl min-[2000px]:text-7xl min-[3840px]:text-[7rem] font-bold text-white tracking-tight mb-6">
          Integrated Ecosystem
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl min-[2000px]:text-3xl min-[3840px]:text-5xl font-light mb-24 min-[2000px]:mb-32 min-[3840px]:mb-48 max-w-2xl min-[2000px]:max-w-5xl min-[3840px]:max-w-[100rem]">
          Our agent network does not act in isolation. They form a complete and intelligent ecosystem capable of managing all phases of the software lifecycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-[2000px]:gap-12 min-[3840px]:gap-20 w-full mb-12">
          {/* Card 1 */}
          <div className="p-8 min-[2000px]:p-12 min-[3840px]:p-20 rounded-[2.5rem] min-[3840px]:rounded-[5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 min-[2000px]:w-24 min-[2000px]:h-24 min-[3840px]:w-40 min-[3840px]:h-40 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl min-[2000px]:text-4xl min-[3840px]:text-7xl font-bold mb-4 min-[3840px]:mb-10">
              1
            </div>
            <h3 className="text-xl min-[2000px]:text-3xl min-[3840px]:text-6xl font-bold text-white mb-2 min-[3840px]:mb-8">Code Analysis</h3>
            <p className="text-slate-400 text-sm min-[2000px]:text-xl min-[3840px]:text-4xl min-[3840px]:leading-relaxed">Automated security and performance inspections in real time.</p>
          </div>
          {/* Card 2 */}
          <div className="p-8 min-[2000px]:p-12 min-[3840px]:p-20 rounded-[2.5rem] min-[3840px]:rounded-[5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 min-[2000px]:w-24 min-[2000px]:h-24 min-[3840px]:w-40 min-[3840px]:h-40 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl min-[2000px]:text-4xl min-[3840px]:text-7xl font-bold mb-4 min-[3840px]:mb-10">
              2
            </div>
            <h3 className="text-xl min-[2000px]:text-3xl min-[3840px]:text-6xl font-bold text-white mb-2 min-[3840px]:mb-8">Continuous Testing</h3>
            <p className="text-slate-400 text-sm min-[2000px]:text-xl min-[3840px]:text-4xl min-[3840px]:leading-relaxed">Dynamic generation of unit and integration tests.</p>
          </div>
          {/* Card 3 */}
          <div className="p-8 min-[2000px]:p-12 min-[3840px]:p-20 rounded-[2.5rem] min-[3840px]:rounded-[5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 min-[2000px]:w-24 min-[2000px]:h-24 min-[3840px]:w-40 min-[3840px]:h-40 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl min-[2000px]:text-4xl min-[3840px]:text-7xl font-bold mb-4 min-[3840px]:mb-10">
              3
            </div>
            <h3 className="text-xl min-[2000px]:text-3xl min-[3840px]:text-6xl font-bold text-white mb-2 min-[3840px]:mb-8">Autonomous Deploy</h3>
            <p className="text-slate-400 text-sm min-[2000px]:text-xl min-[3840px]:text-4xl min-[3840px]:leading-relaxed">Continuous delivery in production ensured by approval agents.</p>
          </div>
        </div>

        {/* Botão de Próximo */}
        {onNext && (
          <button 
            onClick={onNext}
            className="group relative inline-flex items-center justify-center px-10 py-4 min-[2000px]:px-16 min-[2000px]:py-6 min-[3840px]:px-24 min-[3840px]:py-10 min-[2000px]:text-2xl min-[3840px]:text-5xl font-bold text-white transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
          >
            Continue
          </button>
        )}

      </div>
    </section>
  );
});

export default EcosystemSection;
