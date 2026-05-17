import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, GitBranch, Cpu, ChevronDown } from 'lucide-react';
import './index.css';

// SVG Icons abstratos para representar IAs no fundo
const FloatingLogos = () => {
  return (
    <div className="floating-logos-container">
      {/* OpenAI / GPT (Abstrato) */}
      <motion.svg width="100" height="100" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '10%', left: '15%', opacity: 0.2 }}
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="#60a5fa" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0462 6.0462 0 0 0 5.45-3.3408 5.98 5.98 0 0 0 3.9929-2.9001 6.051 6.051 0 0 0-.4209-7.938zm-11.4116 12.016A4.4752 4.4752 0 0 1 7.218 19.344l5.313-3.067v1.868l-1.6609 1.6917z"/>
      </motion.svg>

      {/* Gemini (Star abstrato) */}
      <motion.svg width="80" height="80" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '60%', left: '80%', opacity: 0.3 }}
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <path fill="#93c5fd" d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"/>
      </motion.svg>

      {/* Copilot / Claude (Hexagon abstrato) */}
      <motion.svg width="120" height="120" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '70%', left: '10%', opacity: 0.15 }}
        animate={{ x: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path fill="#3b82f6" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </motion.svg>

      {/* Generic AI Sparkle */}
      <motion.svg width="60" height="60" viewBox="0 0 24 24" className="floating-logo"
        style={{ top: '20%', left: '75%', opacity: 0.25 }}
        animate={{ y: [0, -20, 0], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <path fill="#60a5fa" d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z"/>
      </motion.svg>
    </div>
  );
};

function App() {
  
  const { scrollYProgress } = useScroll();

  const section1Scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const section1Opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

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

      {/* Section 1 */}
      <motion.section 
        className="section sticky-section"
        style={{ scale: section1Scale, opacity: section1Opacity, y: section1Y }}
      >
        <div className="hero-content">
          <div className="badge">Open Source Project</div>
          
          <h1 className="title">Agentic Autonomous Organization</h1>
          
          <p className="description">
            Uma plataforma de código aberto projetada para gerenciar e automatizar múltiplos trabalhos e repositórios de forma inteligente através de Agentes de IA.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><GitBranch /></div>
              <h3 className="feature-title">Automação de Repositórios</h3>
              <p className="feature-desc">Gerenciamento dinâmico de bases de código através de agentes distribuídos.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Cpu /></div>
              <h3 className="feature-title">Gestão de Trabalhos</h3>
              <p className="feature-desc">Orquestração e alocação de tarefas para IA visando eficiência máxima.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Bot /></div>
              <h3 className="feature-title">Agentes Inteligentes</h3>
              <p className="feature-desc">IAs fornecidas pelo próprio código base que atuam de forma autônoma.</p>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>Role para descobrir mais</span>
            <ChevronDown />
          </div>
        </div>
      </motion.section>

      {/* Section 2 */}
      <section className="section second-section">
        <FloatingLogos />
        
        <div className="content-wrapper">
          <motion.div 
            className="about-box"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="about-title">Sobre o Projeto</h2>
            <div className="about-text">
              <p>
                O repositório <strong>Agentic-Autonomous-Organization</strong> não é apenas uma coleção de scripts, 
                é o coração de um ecossistema auto-gerenciável. Nosso objetivo é criar uma estrutura onde a 
                maior parte do fluxo de trabalho diário — da revisão de código à administração de dependências — 
                seja orquestrada e realizada por múltiplos <strong>modelos de Inteligência Artificial</strong>.
              </p>
              <p>
                Através de integrações com as IAs mais modernas do mercado (como GPT-4, Claude 3.5 e Gemini), 
                os agentes ganham a capacidade de colaborar entre si. Eles recebem as <em>tasks</em>, dividem 
                o trabalho, propõem arquiteturas, criam as implementações, e gerenciam as branches do repositório 
                de forma autônoma e segura.
              </p>
              <p>
                Este espaço é dedicado a tornar visível o invisível: expor as métricas, documentar o fluxo de tomada de 
                decisão dos agentes e permitir que você faça parte desta nova era do desenvolvimento <em>Open Source</em>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App
