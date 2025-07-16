const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "watchForFilesChanges": false,
    "chromeWebSecurity": false,
    "viewPortWidth": 1000,
    "viewPortHeight": 600,
    "waitForAnimation": true,
    "animationDistanceTreshold": 20,
    "defaultCommandTimeout": 6000,
    "execTimeout": 60000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 15000,
    "responseTimeout": 15000,
    "video": true,
    "failOnStatusCode": false
  },
});
