/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    minifyJS: {
      enabled: false
    },
    minifyCSS: {
      enabled: false
    },

    // Add options here
    fingerprint: {
      // Adding SVG to the default extensions
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg'],

      // Excluding vendor and wedding js and css (to work with production apache)
      exclude: ['vendor.css', 'vendor.js', 'wedding.css', 'wedding.js'],
    
      // Prepending sources url's to match production base path
      prepend: 'http://www.hugobenicio.com.br/wedding/'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
