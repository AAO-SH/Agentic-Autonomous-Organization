import React from 'react';

const RepoSection = React.memo(({ animationClass }: { animationClass: string }) => {
  return (
    <section className={`absolute inset-0 flex flex-col items-center px-6 w-full ${animationClass} pt-[30vh] pb-10 overflow-y-auto`}>
      <div className="flex flex-col items-center text-center p-12 min-[2000px]:p-24 min-[3840px]:p-32 rounded-[2.5rem] min-[3840px]:rounded-[5rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] max-w-2xl min-[2000px]:max-w-4xl min-[3840px]:max-w-7xl w-full">
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mb-6 min-[3840px]:mb-12 text-slate-300 w-12 h-12 min-[2000px]:w-24 min-[2000px]:h-24 min-[3840px]:w-48 min-[3840px]:h-48">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
        <h2 className="text-3xl min-[2000px]:text-5xl min-[3840px]:text-7xl font-bold text-white mb-4 min-[3840px]:mb-10">Repository Access</h2>
        <p className="text-slate-400 mb-8 min-[3840px]:mb-16 text-lg min-[2000px]:text-2xl min-[3840px]:text-5xl">
          Explore the source code, contribute to the core engine, and create your own autonomous modules.
        </p>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 min-[2000px]:px-12 min-[2000px]:py-6 min-[3840px]:px-20 min-[3840px]:py-10 min-[2000px]:text-2xl min-[3840px]:text-5xl rounded-full min-[3840px]:rounded-[3rem] bg-white text-black font-semibold hover:bg-slate-200 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
});

export default RepoSection;
