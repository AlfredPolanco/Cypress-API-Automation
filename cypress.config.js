const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  env:{
    baseUrl: 'https://reqres.in'

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
