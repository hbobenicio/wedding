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

    /**
     * Fingerprinting is done using the addon broccoli-asset-rev (which is included by default).
     *
     * When the environment is production (e.g. ember build --environment=production),
     * the addon will automatically fingerprint your js, css, png, jpg, and gif assets
     * by appending an md5 checksum to the end of their filename
     * (e.g. assets/yourapp-9c2cbd818d09a4a742406c6cb8219b3b.js).
     * 
     * In addition, your html, js, and css files will be re-written to include the new name.
     * There are a few options you can pass in to EmberApp in your ember-cli-build.js to customize this behavior.
     */
    fingerprint: {
      /**
       * Default: app.env === 'production' - Boolean.
       * Enables fingerprinting if true. True by default if current environment is production.
       */
      //enabled: app.env === 'production',

      /**
       * Default: [] - An array of strings.
       * If a filename contains any item in the exclude array, it will not be fingerprinted.
       * 
       * Excluding vendor and wedding js and css (to work with production apache)
       */
//      exclude: ['vendor.css', 'vendor.js', 'wedding.css', 'wedding.js'],

      /**
       * Default: [] - An array of strings.
       * If a filename contains any item in the ignore array,
       * the contents of the file will not be processed for fingerprinting.
       */
      // ignore: [],

      /**
       * Default: ['js', 'css', 'png', 'jpg', 'gif', 'map']
       * The file types to add md5 checksums.
       * 
       * Adding SVG to the default extensions
       */
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg'],

    
      /**
       * Default: '' - A string to prepend to all of the assets.
       * Useful for CDN urls like https://subdomain.cloudfront.net/
       * 
       * Prepending the production prefix path to the url's of the sources so that it the correct base path.
       */
      prepend: 'http://www.hugobenicio.com.br/casamento/'

      /**
       * Default: ['html', 'css', 'js'] - The file types to replace source code with new checksum file names.
       */
      //replaceExtensions: ['html', 'css', 'js']

      /**
       * When specified, this is appended to fingerprinted filenames instead of the md5.
       * Pass null to suppress the hash, which can be useful when using prepend.
       */
      //customHash: {...}

    } // fingerprint
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
