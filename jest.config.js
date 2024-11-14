// jest.config.js
module.exports = {
  // Optionally, add other Jest configuration options here
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Chemin vers votre fichier setupTests.ts
  testEnvironment: 'jest-environment-jsdom', // Par défaut, pour tester le DOM
};
