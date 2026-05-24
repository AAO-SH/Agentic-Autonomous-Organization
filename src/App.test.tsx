import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App — Tela de Bloqueio (Easter Egg)', () => {
  it('deve exibir a tela "Em Breve" por padrão', () => {
    render(<App />);
    expect(screen.getByText('Em Br')).toBeInTheDocument();
    expect(screen.getByText('v')).toBeInTheDocument();
  });

  it('não deve exibir a navegação principal enquanto bloqueado', () => {
    render(<App />);
    expect(screen.queryByText('Apresentação')).not.toBeInTheDocument();
    expect(screen.queryByText('Como Funciona')).not.toBeInTheDocument();
  });

  it('deve desbloquear o site ao clicar na letra "E" do Easter Egg', () => {
    render(<App />);
    const easterEggs = screen.getAllByText('E');
    fireEvent.click(easterEggs[0]);
    expect(screen.getByText('Apresentação')).toBeInTheDocument();
  });
});

describe('App — Navegação Principal (após desbloqueio)', () => {
  function renderUnlocked() {
    render(<App />);
    const easterEggs = screen.getAllByText('E');
    fireEvent.click(easterEggs[0]);
  }

  it('deve exibir as 4 abas de navegação', () => {
    renderUnlocked();
    expect(screen.getByText('Apresentação')).toBeInTheDocument();
    expect(screen.getByText('Como Funciona')).toBeInTheDocument();
    expect(screen.getByText('Ecossistema')).toBeInTheDocument();
    expect(screen.getByText('Repositório')).toBeInTheDocument();
  });

  it('deve exibir a HeroSection na aba inicial com botão "Iniciar"', () => {
    renderUnlocked();
    expect(screen.getByText('Iniciar')).toBeInTheDocument();
  });

  it('deve navegar para "Como Funciona" ao clicar na aba correspondente', () => {
    renderUnlocked();
    fireEvent.click(screen.getByText('Como Funciona'));
    expect(screen.getByText(/Arquitetura/)).toBeInTheDocument();
  });
});
