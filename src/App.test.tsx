import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App — Tela de Bloqueio (Easter Egg)', () => {
  it('deve exibir a tela "Em Breve" por padrão', () => {
    render(<App />);
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('NG SOON')).toBeInTheDocument();
  });

  it('não deve exibir a navegação principal enquanto bloqueado', () => {
    render(<App />);
    expect(screen.queryByText('Presentation')).not.toBeInTheDocument();
    expect(screen.queryByText('How It Works')).not.toBeInTheDocument();
  });

  it('deve desbloquear o site ao clicar na letra "O" do Easter Egg', () => {
    render(<App />);
    const easterEggs = screen.getAllByText('O');
    fireEvent.click(easterEggs[0]);
    expect(screen.getByText('Presentation')).toBeInTheDocument();
  });
});

describe('App — Navegação Principal (após desbloqueio)', () => {
  function renderUnlocked() {
    render(<App />);
    const easterEggs = screen.getAllByText('O');
    fireEvent.click(easterEggs[0]);
  }

  it('deve exibir as 4 abas de navegação', () => {
    renderUnlocked();
    expect(screen.getByText('Presentation')).toBeInTheDocument();
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('Ecosystem')).toBeInTheDocument();
    expect(screen.getByText('Repository')).toBeInTheDocument();
  });

  it('deve exibir a HeroSection na aba inicial com botão "Start"', () => {
    renderUnlocked();
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('deve navegar para "Como Funciona" ao clicar na aba correspondente', () => {
    renderUnlocked();
    fireEvent.click(screen.getByText('How It Works'));
    expect(screen.getByText(/Architecture/)).toBeInTheDocument();
  });
});
