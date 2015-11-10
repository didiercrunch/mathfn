
var erf = require('./functions/erf.js');
var gamma = require('./functions/gamma.js');
var beta = require('./functions/beta.js');
var log = require('./functions/log.js');

var modules = [erf, gamma, beta, log];

for (var i = 0, l = modules.length; i < l; i++) {
  var fns = modules[i];
  var keys = Object.keys(fns);

  for (var n = 0, r = keys.length; n < r; n++) {
    exports[ keys[n] ] = fns[keys[n]];
  }
}
