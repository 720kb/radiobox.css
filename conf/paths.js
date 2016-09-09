/*global require,module*/
(function pathConfiguration(require, module) {
  'use strict';

const infos = require('../package.json')
  , today = new Date()
  , paths =  {
  "lib": "lib/",
  "dist": "dist/",
  "scss": "lib/scss/",
  "demo": "demo/",
  "banner": ['/*',
      ' * ' + infos.name,
      ' * v' + infos.version,
      ' * ',
      ' * ' + infos.description,
      ' * ' + infos.homepage,
      ' * ',
      ' * ' + infos.license + ' license',
      ' * ' + today.toDateString('yyyy-MM-dd'),
      ' */',
      ''].join('\n')
};

module.exports = paths;
}(require, module));
