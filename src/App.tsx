import { useState, useEffect, useRef } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import HeroSection from './components/sections/HeroSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import EcosystemSection from './components/sections/EcosystemSection';
import RepoSection from './components/sections/RepoSection';
import './index.css';
import './components/Navbar.css';

const TABS = ['Presentation', 'How It Works', 'Ecosystem', 'Repository'];

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const isScrolling = useRef(false);

  const changeTab = (newIndex: number) => {
    if (newIndex === activeTab) return;
    setDirection(newIndex > activeTab ? 'down' : 'up');
    setActiveTab(newIndex);
  };

  useEffect(() => {
    if (!isUnlocked) return;
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;
      setTimeout(() => isScrolling.current = false, 600);

      if (e.deltaY > 0) {
        if (activeTab < TABS.length - 1) changeTab(activeTab + 1);
      } else {
        if (activeTab > 0) changeTab(activeTab - 1);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeTab, TABS.length, isUnlocked]);

  if (!isUnlocked) {
    return (
      <div className="w-screen h-screen bg-black text-white flex items-center justify-center text-3xl sm:text-4xl min-[2000px]:text-7xl min-[3840px]:text-[8rem] tracking-[0.2em] font-light uppercase select-none">
        <span>C</span>
        <span onClick={() => setIsUnlocked(true)} className="cursor-pointer hover:text-white/80 transition-colors duration-300">O</span>
        <span>M</span>
        <span onClick={() => setIsUnlocked(true)} className="cursor-pointer hover:text-white/80 transition-colors duration-300">I</span>
        <span>NG SOON</span>
      </div>
    );
  }

  const renderSection = () => {
    const animationClass = direction === 'down' ? 'slide-enter-right' : 'slide-enter-left';
    
    switch (activeTab) {
      case 0:
        return <HeroSection key="hero" animationClass={animationClass} onNext={() => changeTab(1)} />;
      case 1:
        return <HowItWorksSection key="how" animationClass={animationClass} onNext={() => changeTab(2)} />;
      case 2:
        return <EcosystemSection key="eco" animationClass={animationClass} onNext={() => changeTab(3)} />;
      case 3:
        return <RepoSection key="repo" animationClass={animationClass} />;
      default:
        return <HeroSection key="hero" animationClass={animationClass} onNext={() => changeTab(1)} />;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-950 flex flex-col text-white font-sans selection:bg-blue-500/30">
      <AnimatedBackground />

      <header className="absolute top-0 left-0 right-0 pt-8 pb-4 flex justify-center items-center z-50 pointer-events-none">
        <div className="relative inline-flex p-[6px] rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] pointer-events-auto">
          
          <div 
            className="absolute top-[6px] bottom-[6px] rounded-full bg-white/10 border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_4px_15px_rgba(255,255,255,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ 
              width: 'var(--tab-width)',
              left: `calc(6px + ${activeTab} * var(--tab-width))`
            }}
          />

          {TABS.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => changeTab(idx)}
              className={`relative z-10 w-[var(--tab-width)] py-2 min-[2000px]:py-4 min-[3840px]:py-6 text-xs sm:text-sm min-[2000px]:text-xl min-[3840px]:text-3xl font-medium transition-colors duration-300 ${
                activeTab === idx ? 'text-white drop-shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full overflow-hidden">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
