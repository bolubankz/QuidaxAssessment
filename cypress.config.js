const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.seleniumeasy.com/',
    viewportHeight: 960,
    viewportWidth: 1538,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
