import '@testing-library/jest-dom';

// Mocks para o window/document para evitar erros do Framer Motion e observers
Object.defineProperty(window as any, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(window as any).ResizeObserver = ResizeObserver;

// Mock IntersectionObserver
class IntersectionObserver {
  constructor(callback: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
(window as any).IntersectionObserver = IntersectionObserver;
