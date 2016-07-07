/**
 * Wheel对象
 *
 * @return {[type]} [description]
 */
var _ = function() {};

_.fn = _.prototype;

_.fn.mixin = _.mixin = function(destination, source) {
  for (var property in source)
    destination[property] = source[property];
  return destination;
};

module.exports = _;
