'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sourcemaps: {
      enabled: true
    },
    postcssOptions: {
      compile: {
        plugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
  });
  return app.toTree();
};
