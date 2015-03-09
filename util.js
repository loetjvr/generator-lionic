'use strict';

var path = require('path');
var fs = require('fs');

var exports = {
  wireRoute: function(vars) {
    var script = '})\n      .state(\'nav.' + vars.filename + '\', {\n' +
      '        url: \'/' + vars.filename + '\',\n' +
      '        views: {\n' +
      '          \'nav-' + vars.filename + '\': {\n' +
      '            templateUrl: \'templates/' + vars.filename + '.html\',\n' +
      '            controller: \'' + vars.ctrlname + 'Ctrl\'\n' +
      '          }\n' +
      '        }\n' +
      '      }); // inject:state';

    var file = path.join(process.cwd(), 'www/js/app.js');

    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }

      var result = data.replace(/\}\);( )\/\/inject:state/g, script);

      fs.writeFile(file, result, 'utf8', function(err) {
        if (err) {
          return console.log(err);
        }
      });
    });
  }
};

module.exports = exports;
