import './index.css'

function App() {
  return (
    <div className="app-container">
      <main className="hero-section">
        <div className="badge">Open Source Project</div>
        
        <h1 className="title">Agentic Autonomous Organization</h1>
        
        <p className="description">
          Uma plataforma de código aberto projetada para gerenciar e automatizar múltiplos trabalhos e repositórios de forma inteligente através de Agentes de IA.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="feature-title">Automação de Repositórios</h3>
            <p className="feature-desc">Gerenciamento dinâmico de bases de código através de agentes distribuídos.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="feature-title">Gestão de Trabalhos</h3>
            <p className="feature-desc">Orquestração e alocação de tarefas para IA visando eficiência máxima.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="feature-title">Agentes Inteligentes</h3>
            <p className="feature-desc">IAs fornecidas pelo próprio código base que atuam de forma autônoma.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
