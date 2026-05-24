import '@testing-library/jest-dom';

// Mocks para o window/document
Object.defineProperty(window as any, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
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
  constructor(_callback: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
(window as any).IntersectionObserver = IntersectionObserver;

// Mock canvas/WebGL para o DotField e AnimatedBackground
HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({
  clearRect: jest.fn(),
  fillRect: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  scale: jest.fn(),
  fillStyle: '',
});
