var _ = {};

/**
 * 判断当前obj是否为空
 *
 * @method isEmpty
 * @param {Object} obj 需要验证的对象
 * @return {Boolean} obj是否为空,返回true则为空，返回false则不为空
 */
_.isEmpty = function(obj) {
  return (!(Boolean($.trim(obj) || obj === 0)) || obj == "null" || obj == "undefined");
};

/**
 * 判断变量的值是否是 undefined
 * Determines whether or not the provided object is undefined
 *
 * @method isUndefined
 * @memberOf Jx.prototype
 *
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的值是 undefined 时返回 true
 */
_.isUndefined = function(o) {
  return typeof(o) === "undefined";
};

/**
 * 判断变量的值是否是 null
 * Determines whether or not the provided object is null
 *
 * @method isNull
 * @memberOf Jx.prototype
 *
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的值是 null 时返回 true
 */
_.isNull = function(o) {
  return o === null;
};

/**
 * 判断变量的类型是否是 Number
 * Determines whether or not the provided object is a number
 *
 * @memberOf Jx.prototype
 * @name isNumber
 * @function
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的类型是 number 时返回 true
 */
_.isNumber = function(o) {
  return (o === 0 || o) && o.constructor === Number;
};

/**
 * 判断变量的类型是否是 Boolean
 * Determines whether or not the provided object is a boolean
 *
 *
 * @method isBoolean
 * @memberOf Jx.prototype
 *
 * @static
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的类型是 boolean 时返回 true
 */
_.isBoolean = function(o) {
  return (o === false || o) && (o.constructor === Boolean);
};

/**
 * 判断变量的类型是否是 String
 * Determines whether or not the provided object is a string
 *
 *
 * @method isString
 * @memberOf Jx.prototype
 *
 * @static
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的类型是 string 时返回 true
 */
_.isString = function(o) {
  return (o === "" || o) && (o.constructor === String);
};

/**
 * 判断变量的类型是否是 Object
 * Determines whether or not the provided object is a object
 *
 *
 * @method isObject
 * @memberOf Jx.prototype
 *
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的类型是 object 时返回 true
 */
_.isObject = function(o) {
  return o && (o.constructor === Object || Object.prototype.toString.call(o) === "[object Object]");
};

/**
 * 判断变量的类型是否是 Array
 * Determines whether or not the provided object is a array
 *
 *
 * @method isArray
 * @memberOf Jx.prototype
 *
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的类型是 array 时返回 true
 */
_.isArray = function(o) {
  return o && (o.constructor === Array || Object.prototype.toString.call(o) === "[object Array]");
};

/**
 * 判断变量的类型是否是 Arguments
 * Determines whether or not the provided object is a arguments
 *
 *
 * @method isArguments
 * @memberOf Jx.prototype
 *
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的类型是 arguments 时返回 true
 */
_.isArguments = function(o) {
  return o && o.callee && isNumber(o.length) ? true : false;
};

/**
 * 判断变量的类型是否是 Function
 * Determines whether or not the provided object is a function
 *
 *
 * @method isFunction
 * @memberOf Jx.prototype
 *
 * @param {Mixed} o 传入被检测变量的名称
 * @return {Boolean} 当 o 的类型是 function 时返回 true
 */
_.isFunction = function(o) {
  return o && (o.constructor === Function);
};

/**
 * 判断变量类型的方法
 * Determines the type of object
 *
 *
 * @method $typeof
 * @memberOf Jx.prototype
 *
 * @param {Mixed} o 传入被检测变量的名称
 * @return {String} 返回变量的类型，如果不识别则返回 other
 */
_.$typeof = function(o) {
  if (_.isUndefined(o)) {
    return "undefined";
  } else if (_.isNull(o)) {
    return "null";
  } else if (_.isNumber(o)) {
    return "number";
  } else if (_.isBoolean(o)) {
    return "boolean";
  } else if (_.isString(o)) {
    return "string";
  } else if (_.isObject(o)) {
    return "object";
  } else if (_.isArray(o)) {
    return "array";
  } else if (_.isArguments(o)) {
    return "arguments";
  } else if (_.isFunction(o)) {
    return "function";
  } else {
    return "other";
  }
};

/**
 * 获取url参数
 *
 * @method getUrlParam
 * @param {String} name 参数名
 * @return {String} 获取到的结果
 */
_.getUrlParam = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
  var r = _.decodingURI(window.location.search).substr(1).match(reg); // 匹配目标参数
  if (r != null)
    return r[2];
  return null; // 返回参数值
};

/**
 * 生成随机数的方法
 *
 * @method random
 *
 * @param {Number} min 生成随机数的最小值
 * @param {Number} max 生成随机数的最大值
 * @return {Number} 返回生成的随机数
 */
_.random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * 克隆一个对象
 *
 * @method clone
 *
 * @param {Object} o 要克隆的对象
 * @return {Object} 返回通过克隆创建的对象
 *
 * @example
 *     var objA = {name: "John"};
 *     // 克隆一个 objA 对象，并存入 objB 中。
 *     var objB = clone(objA);
 */
_.clone = function(o){
    /**
     * @ignore
     */
    var Clazz = function(){};
    tempClass.prototype = o;

    // 返回新克隆的对象
    return (new Clazz());
};

/**
 * 获取当前时间的函数
 *
 * @method now
 *
 * @example
 * alert(now());
 *
 */
_.now = function(){
    return +new Date;
};

module.exports = _;
