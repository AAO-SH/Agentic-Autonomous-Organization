// Mock for the ogl WebGL library used by DotField.tsx
module.exports = {
  Renderer: jest.fn().mockImplementation(() => ({
    gl: { canvas: document.createElement('canvas') },
    setSize: jest.fn(),
    render: jest.fn(),
  })),
  Camera: jest.fn().mockImplementation(() => ({
    position: { z: 0 },
  })),
  Transform: jest.fn().mockImplementation(() => ({
    addChild: jest.fn(),
  })),
  Geometry: jest.fn().mockImplementation(() => ({})),
  Program: jest.fn().mockImplementation(() => ({})),
  Mesh: jest.fn().mockImplementation(() => ({
    setParent: jest.fn(),
  })),
};
