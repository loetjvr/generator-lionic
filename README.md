# generator-lionic ![Build Status](https://travis-ci.org/loetjvr/generator-lionic.svg?branch=master) [![Dependency Status](https://david-dm.org/loetjvr/generator-lionic.svg)](https://david-dm.org/loetjvr/generator-lionic.svg)

> Yeoman generator for [Ionic](http://ionicframework.com/)

## Installation

Install `yo`, `gulp`, `bower`, `generator-lionic`, `generator-yangular` `ionic`:
```
npm install -g gulp bower yo generator-lionic generator-yangular ionic
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd my-new-project
```

Run `yo lionic`, optionally passing an app name:
```
yo lionic [app-name]
```

## Ionic CLI
Serve the project at `http://locahost:8100`
```
ionic serve
```

## Gulpfile
Run Karma tests
```
gulp test
```
Generate [ngDocs](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation) folder with all the generated documentation in a format that can be hosted
```
gulp docs
```

## Generators

Available generators:
```bash
yo lionic:view name
```

```bash
yo lionic:controller name
```

```bash
yo lionic:route name
```

```bash
yo lionic:directive name
```

```bash
yo lionic:filter name
```

```bash
yo lionic:service name
```

```bash
yo lionic:factory name
```

```bash
yo lionic:constant name
```

## Editor Plugins
* [EditorConfig](http://editorconfig.org/#download)
* [JSHint](http://jshint.com/install/)
* [JSSC](http://jscs.info/overview.html)

## License

MIT
