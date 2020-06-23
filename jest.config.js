const ignores = [
  '/src/index.ts',
  '/playground/',
  '/node_modules/',
  '/__tests__/helpers/',
  '/__tests__/utils/',
  '__mocks__',
];

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/other/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.story.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['json-summary', 'json', 'lcov', 'text'],
  coveragePathIgnorePatterns: [...ignores],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'scss'],
  modulePaths: ['src'],
  preset: 'jest-preset-typescript',
  setupFilesAfterEnv: ['<rootDir>/config/testSetup.js'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  testURL: 'http://localhost',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testRegex: [],
  testPathIgnorePatterns: [...ignores],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
};
