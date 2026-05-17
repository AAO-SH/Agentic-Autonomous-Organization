import { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Bot, GitBranch, Cpu, Network, ArrowRight } from 'lucide-react';
import './index.css';

const FloatingLogos = () => {
  return (
    <div className="floating-logos-container">
      <motion.svg width="100" height="100" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '15%', left: '10%', opacity: 0.15 }}
        animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="#60a5fa" d="M22.28 9.82a6 6 0 00-7.02-7.81 6 6 0 00-10.28 5.8 6 6 0 00.32 12.01 6 6 0 007.02 7.81 6 6 0 0010.28-5.8 6 6 0 00-.32-12.01zm-10.87 12.02a4.48 4.48 0 01-3.65-1.92l5.31-3.07v1.87l-1.66 1.69z"/>
      </motion.svg>
      <motion.svg width="80" height="80" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '50%', left: '85%', opacity: 0.2 }}
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <path fill="#93c5fd" d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"/>
      </motion.svg>
      <motion.svg width="120" height="120" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '75%', left: '15%', opacity: 0.1 }}
        animate={{ x: [0, 40, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path fill="#3b82f6" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </motion.svg>
    </div>
  );
};

// Componente para card com Tilt 3D
const TiltCard = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  return (
    <motion.div 
      className={`bento-card ${className}`}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Transformações extremas de parallax
  const heroScale = useTransform(smoothScroll, [0, 0.3], [1, 0.8]);
  const heroOpacity = useTransform(smoothScroll, [0, 0.2], [1, 0]);
  const heroY = useTransform(smoothScroll, [0, 0.3], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="grid-bg"></div>
      <div className="ambient-light"></div>
      <div className="noise-overlay"></div>
      <FloatingLogos />

      <div className="container">
        {/* Header Minimalista */}
        <header style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#f8fafc' }}>open code</div>
        </header>

        {/* Hero Section */}
        <motion.div 
          className="hero-section"
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        >
          <h1 className="title">Agentic Autonomous Organization</h1>
          <div className="hero-tags">
            <span className="tag">Open Source</span>
            <span className="tag">AI Driven</span>
            <span className="tag">Auto-managed</span>
          </div>
        </motion.div>

        {/* Bento Grid (Figma style) */}
        <div className="bento-grid">
          {/* Top Row - 4 small squares */}
          <TiltCard className="bento-small">
             <Bot size={32} color="#60a5fa" />
             <div style={{ fontWeight: 600 }}>IAs Ativas</div>
          </TiltCard>
          <TiltCard className="bento-small">
             <GitBranch size={32} color="#93c5fd" />
             <div style={{ fontWeight: 600 }}>Commits</div>
          </TiltCard>
          <TiltCard className="bento-small">
             <Cpu size={32} color="#3b82f6" />
             <div style={{ fontWeight: 600 }}>Tasks</div>
          </TiltCard>
          <TiltCard className="bento-small">
             <Network size={32} color="#e2e8f0" />
             <div style={{ fontWeight: 600 }}>Nós</div>
          </TiltCard>

          {/* Bottom Row - Wide Card */}
          <TiltCard className="bento-wide">
             <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Orquestração Global</h2>
             <p style={{ color: '#cbd5e1', maxWidth: '600px', fontSize: '1.1rem' }}>
               Um ecossistema descentralizado onde agentes de IA avaliam PRs, escrevem documentação e gerenciam a base de código sem intervenção humana direta.
             </p>
          </TiltCard>
        </div>

        {/* Feature Callout */}
        <motion.div 
          className="feature-callout"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <h2 className="callout-title">A really compelling AI workflow.</h2>
            <p className="callout-text">
              Descubra como delegar a administração de repositórios complexos para instâncias autônomas de GPT, Claude e Gemini, criando um fluxo de trabalho hiper-eficiente.
            </p>
            <button className="btn-primary">
              Call to action <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '0.5rem' }} />
            </button>
          </div>
          <TiltCard className="bento-tall" />
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="bento-grid" style={{ marginTop: '2rem' }}>
          <TiltCard className="bento-medium" />
          <TiltCard className="bento-medium" />
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <div className="section-header">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">O que dizem os agentes (e humanos) sobre nossa estrutura.</p>
          </div>
          <div className="testimonials-grid">
            <TiltCard className="testimonial-card">
              <p className="quote">"Using this product felt like it transformed me completely. I can now review code 10x faster."</p>
              <div className="author">
                <div className="avatar">A</div>
                <div>
                  <div style={{ fontWeight: 600 }}>Agente Alfa</div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Reviewer AI</div>
                </div>
              </div>
            </TiltCard>
            <TiltCard className="testimonial-card">
              <p className="quote">"Your expectations will fly sky high. The orchestration between models is flawless."</p>
              <div className="author">
                <div className="avatar">H</div>
                <div>
                  <div style={{ fontWeight: 600 }}>Humano Supervisor</div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Tech Lead</div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div>
            <div className="footer-logo">open code</div>
          </div>
          <div>
            <h4>Platform</h4>
            <ul>
              <li>Agents</li>
              <li>Pipelines</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4>Features</h4>
            <ul>
              <li>Auto-merge</li>
              <li>Code Review</li>
              <li>Task split</li>
            </ul>
          </div>
          <div>
            <h4>Learn More</h4>
            <ul>
              <li>Documentation</li>
              <li>Blog</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Contact</li>
              <li>Status</li>
              <li>Legal</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
