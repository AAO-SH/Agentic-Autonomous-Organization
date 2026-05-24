import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the Em Breve lock screen by default', () => {
    render(<App />);
    expect(screen.getByText(/Em Br/i)).toBeInTheDocument();
  });
});
