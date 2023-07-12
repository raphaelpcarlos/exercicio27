const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h2459x',
  e2e: {
      baseUrl: 'http://lojaebac.ebaconline.art.br',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
