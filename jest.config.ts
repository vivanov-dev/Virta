export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|png)$': '<rootDir>/src/jest/mocks/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.svg$': "<rootDir>/src/jest/mocks/svg.js"
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}