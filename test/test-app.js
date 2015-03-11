'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('lionic:app', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({'skip-install': true})
      .on('end', done);
  });

  it('creates app files', function() {
    assert.file([
      '.bowerrc',
      '.editorconfig',
      '.gitignore',
      '.jscsrc',
      '.jshintrc',
      '.yo-rc.json',
      'bower.json',
      'gulpfile.js',
      'package.json',
      'config.xml',
      'ionic.project',
      'wire.dep'
    ]);
  });

  it('creates app directory', function() {
    assert.file([
      'www/index.html',
      'www/js/app.js',
      'www/js/controllers/main.js',
      'www/templates/main.html',
      'www/templates/nav.html',
      'scss/main.scss',
      'hooks/'
    ]);
  });

  it('creates test directory', function() {
    assert.file([
      'test/karma.conf.js',
      'test/spec/controllers/main.js'
    ]);
  });
});
