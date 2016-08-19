'use strict';

var path = require('path');
var glob = require('glob');
var path = require('path');

/**
 * Load a set of files
 * @param  {string|array} dir
 * @param  {string}       pattern
 * @return {array}
 */
exports.loadFiles = function(dir, pattern) {
  var files = [];

  dir = !Array.isArray(dir) ? [dir] : dir;

  var globPath;
  for (var i in dir) {
    if (path.isAbsolute(dir[i])) {
      globPath = path.join(dir[i], pattern);
    } else {
      globPath = path.join(process.cwd(), dir[i], pattern);
    }
    files = files.concat(glob.sync(globPath));
  }

  return files;
}