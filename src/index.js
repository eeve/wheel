var _ = require('./core');

var exts = ['./utils/object','./utils/string','./utils/array','./utils/format','./utils/storage'];
for (var i = exts.length - 1; i >= 0; i--) {
  var path = exts[i];
  var ext = require(path);
  _.mixin(_.fn,ext);
};

module.exports = _;

