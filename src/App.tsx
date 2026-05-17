import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Bot, Cpu, Network } from 'lucide-react';
import './index.css';

const FloatingLogos = () => {
  return (
    <div className="floating-logos-container">
      <motion.svg width="100" height="100" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '15%', left: '10%', opacity: 0.15 }}
        animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="#60a5fa" d="M22.28 9.82a6 6 0 00-7.02-7.81 6 6 0 00-10.28 5.8 6 6 0 00.32 12.01 6 6 0 007.02 7.81 6 6 0 0010.28-5.8 6 6 0 00-.32-12.01zm-10.87 12.02a4.48 4.48 0 01-3.65-1.92l5.31-3.07v1.87l-1.66 1.69z" />
      </motion.svg>
      <motion.svg width="80" height="80" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '50%', left: '85%', opacity: 0.2 }}
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <path fill="#93c5fd" d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
      </motion.svg>
      <motion.svg width="120" height="120" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '75%', left: '15%', opacity: 0.1 }}
        animate={{ x: [0, 40, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path fill="#3b82f6" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </motion.svg>
    </div>
  );
};

// Componente para card com Tilt 3D
const TiltCard = ({ children, className, style, delay = 0 }: { children?: React.ReactNode, className?: string, style?: React.CSSProperties, delay?: number }) => {
  return (
    <motion.div
      className={`bento-card ${className}`}
      style={style}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      viewport={{ once: true, margin: "-50px" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay, duration: 0.5, ease: "easeOut" } }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // O Hero diminui e fica escuro conforme rolamos
  const heroScale = useTransform(smoothScroll, [0, 0.4], [1, 0.8]);
  const heroOpacity = useTransform(smoothScroll, [0, 0.3], [1, 0.2]);

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
      // Usando requestAnimationFrame para otimizar renderização em mobile e PC
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <div className="grid-bg"></div>
      <div className="ambient-light"></div>
      <div className="noise-overlay"></div>
      <FloatingLogos />

      <header className="top-header">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
          <span style={{ background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>open code</span>
        </div>
      </header>

      {/* Hero Fixo que vai pro fundo */}
      <div className="sticky-hero">
        <motion.div
          className="hero-content"
          style={{ scale: heroScale, opacity: heroOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Agentic Autonomous Organization
          </motion.h1>
          <motion.div 
            className="hero-tags"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, staggerChildren: 0.1 }}
          >
            <span className="tag">Open Source</span>
            <span className="tag">AI Driven</span>
            <span className="tag">Auto-managed</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Seção que sobrepõe o Hero */}
      <div className="overlap-section">
        <div className="container">

          {/* Bento Grid */}
          <div className="bento-grid">
            <TiltCard className="bento-small" delay={0.1}>
              <Bot size={36} color="#60a5fa" />
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>IAs Ativas</div>
            </TiltCard>
            <TiltCard className="bento-small" delay={0.2}>
              <Cpu size={36} color="#3b82f6" />
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Tasks</div>
            </TiltCard>
            <TiltCard className="bento-small" delay={0.3}>
              <Network size={36} color="#e2e8f0" />
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Nós</div>
            </TiltCard>

            <TiltCard className="bento-wide" delay={0.4}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800 }}>Orquestração Global</h2>
              <p style={{ color: '#cbd5e1', maxWidth: '800px', fontSize: '1.2rem', lineHeight: 1.6 }}>
                Um código de base aberto que permite a múltiplas instâncias de Inteligência Artificial assumirem a gestão completa de repositórios. Cada IA atua como um agente autônomo, monitorando commits, avaliando pull requests e criando arquiteturas complexas sem a necessidade de intervenção humana.
              </p>
            </TiltCard>
          </div>

          {/* Feature Callout */}
          <motion.div
            className="feature-callout"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <h2 className="callout-title">AI Pipeline Workflow.</h2>
              <p className="callout-text">
                Pipeline de CI/CD reverso. Em vez de testar código humano, os modelos analisam e disparam webhooks nativos para auto-correção. Integrações via API distribuem tokens contextuais, permitindo a comunicação entre múltiplos agentes (GPT, Claude, Gemini) em um único grafo de dependências.
              </p>
            </div>
            <TiltCard className="bento-tall" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Network size={80} color="rgba(96, 165, 250, 0.4)" strokeWidth={1} />
            </TiltCard>
          </motion.div>

          {/* Developers Collaboration */}
          <div className="developers-collab">
            <div className="section-header">
              <h2 className="section-title">Developers Collaboration</h2>
              <p className="section-subtitle">Conheça os engenheiros e pesquisadores contribuindo para o nosso código-fonte.</p>
            </div>
            <div className="devs-grid">
              <TiltCard className="dev-profile-card" delay={0.1}>
                <div className="dev-avatar-placeholder">+</div>
                <div className="dev-info">
                  <h3>Vaga Aberta</h3>
                  <p>Contribuidor Full-Stack / IA</p>
                </div>
              </TiltCard>
              <TiltCard className="dev-profile-card" delay={0.3}>
                <div className="dev-avatar-placeholder">+</div>
                <div className="dev-info">
                  <h3>Vaga Aberta</h3>
                  <p>Engenheiro de Prompts</p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer">
            <div>
              <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                <span style={{ background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>open code</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '300px', lineHeight: 1.6 }}>
                Construindo a fundação para a automação total de software através de IA.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <ul>
                  <li>Contact</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Collaboration</li>
                  <li>Donate</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
