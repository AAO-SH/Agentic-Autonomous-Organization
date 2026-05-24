module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.cjs',
    '^ogl$': '<rootDir>/__mocks__/oglMock.cjs',
  },
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { 
      tsconfig: 'tsconfig.app.json',
      diagnostics: false,
      isolatedModules: true
    }],
  },
};
