const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: 
  {
    baseUrl: 'https://demowebshop.tricentis.com/',
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    }
  }
})
