import React from 'react';

interface EcosystemSectionProps {
  animationClass: string;
  onNext?: () => void;
}

const EcosystemSection = React.memo(({ animationClass, onNext }: EcosystemSectionProps) => {
  return (
    <section className={`absolute inset-0 flex flex-col items-center px-6 w-full ${animationClass} pt-[22vh] pb-10 overflow-y-auto`}>
      <div className="flex flex-col items-center max-w-5xl w-full text-center">
        
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
          Integrated Ecosystem
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl font-light mb-12 max-w-2xl">
          Our agent network does not act in isolation. They form a complete and intelligent ecosystem capable of managing all phases of the software lifecycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {/* Card 1 */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Code Analysis</h3>
            <p className="text-slate-400 text-sm">Automated security and performance inspections in real time.</p>
          </div>
          {/* Card 2 */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Continuous Testing</h3>
            <p className="text-slate-400 text-sm">Dynamic generation of unit and integration tests.</p>
          </div>
          {/* Card 3 */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Autonomous Deploy</h3>
            <p className="text-slate-400 text-sm">Continuous delivery in production ensured by approval agents.</p>
          </div>
        </div>

        {/* Botão de Próximo */}
        {onNext && (
          <button 
            onClick={onNext}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
          >
            Continue
          </button>
        )}

      </div>
    </section>
  );
});

export default EcosystemSection;
