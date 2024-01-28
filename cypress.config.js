const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    
    specPattern: 'cypress/e2e/tests/**/*.{js,jsx,ts,tsx,spec}',
    baseUrl: 'https://www.qubika.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    
    },
});
