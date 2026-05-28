import React from 'react';

const RepoSection = React.memo(({ animationClass }: { animationClass: string }) => {
  return (
    <section className={`absolute inset-0 flex flex-col items-center px-6 w-full ${animationClass} pt-[30vh] pb-10 overflow-y-auto`}>
      <div className="flex flex-col items-center text-center p-12 rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] max-w-2xl w-full">
        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mb-6 text-slate-300">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
        <h2 className="text-3xl font-bold text-white mb-4">Repository Access</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Explore the source code, contribute to the core engine, and create your own autonomous modules.
        </p>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
});

export default RepoSection;
