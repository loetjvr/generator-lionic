'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.argument('name', {type: String, required: true});

    this.composeWith('yangular:constant', {
      args: [this.name],
      options: {
        scriptsDir: this.config.get('scriptsDir')
      }
    });
  }
});
