import { render, screen } from '@testing-library/react';
import App from './App';

describe('TDD: App Component Rendering', () => {
  it('deve renderizar o titulo principal da aplicação sem erros', () => {
    render(<App />);
    const mainTitle = screen.getByText(/Agentic Autonomous Organization/i);
    expect(mainTitle).toBeInTheDocument();
  });

  it('deve renderizar a seção Developers Collaboration', () => {
    render(<App />);
    const collabTitle = screen.getByText(/Developers Collaboration/i);
    expect(collabTitle).toBeInTheDocument();
  });
});
