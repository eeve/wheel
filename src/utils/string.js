var _ = {};

/**
 * 将任意变量转换为字符串
 *
 * @method toString
 * @memberOf string
 *
 * @param {Mixed} o 变量
 * @return {String} 返回转换后的字符串
 */
_.toString = function(obj) {
  return (obj + "");
};

/**
 * 判断是否是一个可接受的 url 串
 *
 * @method isURL
 * @memberOf string
 *
 * @param {String} str 要检测的字符串
 * @return {Boolean} 如果是可接受的 url 则返回 true
 */
_.isURL = function(str) {
  return _.isURL.RE.test(str);
};

/**
 * 判断是否为一个有效的URL
 * @type {RegExp}
 */
_.isURL.RE = /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i;

/**
 * 分解 URL 为一个对象，成员为：scheme, user, pass, host, port, path, query, fragment
 *
 * @method parseURL
 * @memberOf string
 *
 * @param {String} str URL 地址
 * @return {Object} 如果解析失败则返回 null
 */
_.parseURL = function(str) {
  var ret = null;

  if (null !== (ret = _.parseURL.RE.exec(str))) {
    var spec = {};
    for (var i = 0, j = _.parseURL.SPEC.length; i < j; i++) {
      var curSpec = _.parseURL.SPEC[i];
      spec[curSpec] = ret[i + 1];
    }
    ret = spec;
    spec = null;
  }

  return ret;
};

/**
 * @ignore
 */
_.parseURL.SPEC = ['scheme', 'user', 'pass', 'host', 'port', 'path', 'query', 'fragment'];
_.parseURL.RE = /^([^:]+):\/\/(?:([^:@]+):?([^@]*)@)?(?:([^/?#:]+):?(\d*))([^?#]*)(?:\?([^#]+))?(?:#(.+))?$/;

/**
 * 将 url 的查询字符串参数映射成对象
 *
 * @method mapQuery
 * @memberOf string
 *
 * @param {String} uri 要映射的 uri
 * @return {Object} 按照 uri 映射成的对象
 *
 * @example
 *  var url = "http://domain.com/?p1=1&p2=2";
 *  mapQuery(url); // { p1:1, p2:2 }
 * };
 */
_.mapQuery = function(uri) {
  //window.location.search
  var i,
    key,
    value,
    uri = uri && uri.split('#')[0] || window.location.search, //remove hash
    index = uri.indexOf("?"),
    pieces = uri.substring(index + 1).split("&"),
    params = {};
  //如果连?号都没有,直接返回,不进行处理.
  if (index === -1) {
    return params;
  }
  for (i = 0; i < pieces.length; i++) {
    try {
      index = pieces[i].indexOf("=");
      key = pieces[i].substring(0, index);
      value = pieces[i].substring(index + 1);
      if (!(params[key] = unescape(value))) {
        throw new Error("uri has wrong query string when run mapQuery.");
      }
    } catch (e) {
      throw new Error("错误：has wrong when run mapQuery.");
    }
  }
  return params;
};


/**
 * 判断是否含有指定的字符串
 *
 * @memberOf string
 * @name contains
 * @function
 * @param {String} string 是否含有的字符串
 * @param {String} separator 分隔符，可选(有分隔符则判断两个字符串是否一致)
 * @return {Boolean} 如果含有，返回 true，否则返回 false
 */
_.contains = function(string1, string2, separator){
    return (separator) ? (separator + string1 + separator).indexOf(separator + string2 + separator) > -1 : string1.indexOf(string2) > -1;
};
/**
 * 清除字符串开头和结尾的空格
 *
 * @memberOf string
 *
 * @return {String} 返回清除后的字符串
 */
_.trim = function(string){
    return String(string).replace(/^\s+|\s+$/g, '');
};

/**
 * 清除字符串开头和结尾的空格，并把字符串之间的多个空格转换为一个空格
 *
 * @memberOf string
 *
 * @return {String} 返回清除后的字符串
 */
_.clean = function(string){
    return _.trim(string.replace(/\s+/g, ' '));
};

/**
 * 将“-”连接的字符串转换成驼峰式写法
 *
 * @memberOf string
 *
 * @return {String} 返回转换后的字符串
 */
_.camelCase = function(string){
    return _.toString(string).replace(/-\D/g, function(match){
        return match.charAt(1).toUpperCase();
    });
};

/**
 * 将驼峰式写法字符串转换成“-”连接的
 *
 * @memberOf string
 *
 * @return {String} 返回转换后的字符串
 */
_.hyphenate = function(string){
    return _.toString(string).replace(/[A-Z]/g, function(match){
        return ('-' + match.charAt(0).toLowerCase());
    });
};

/**
 * 将字符串转换成首字母大写
 *
 * @memberOf string
 *
 * @return {String} 返回转换后的字符串
 */
_.capitalize = function(string){
    return _.toString(string).replace(/\b[a-z]/g, function(match){
        return match.toUpperCase();
    });
};

/**
 * 将字符串转换成整数
 *
 * @memberOf string
 *
 * @return {Number} 返回转换后的整数
 */
_.toInt = function(string, base){
    return parseInt(string, base || 10);
};

/**
 * 将字符串转换成浮点数
 *
 * @memberOf string
 * @param {Sring} string 要转换的字符串
 * @return {Number} 返回转换后的浮点数
 */
_.toFloat = function(string){
    return parseFloat(string);
};

/**
 * 将颜色 Hex 写法转换成 RGB 写法
 *
 * @memberOf string
 * @return {String} 返回转换后的字符串
 * @author rewrite by dmyang
 */
_.hexToRgb = function(string){
    var hex = string.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
    var _convert = function(array) {
        var length = array.length;
        if (length !== 3) return null;
        for(var i=0, value; i<length; i++) {
            value = array[i];
            if(value.length === 1) value += value;
            array[i] = parseInt(value, 16);
        }
        return 'rgb(' + array + ')';
    };
    return (hex) ? _convert(hex.slice(1)) : null;
};

/**
 * 将颜色 RGB 写法转换成 Hex 写法
 *
 * @memberOf string
 * @return {String} 返回转换后的字符串
 * @author rewrite by dmyang
 */
_.rgbToHex = function(string){
    var r = string.match(/\d{1,3}/g);
    return (r) ? '#' + ((1 << 24) + ((r[0] << 0) << 16) + ((r[1] << 0) << 8) + (r[2] << 0)).toString(16).slice(1) : null;
};

/**
 * 编码查询参数
 *
 * @memberOf string
 * @param {string} key 要编码的查询参数名字
 * @param {string} value 要编码的查询参数值
 * @return {String} 返回编码后的查询字符串
 */
_.toQueryPair = function(key, value) {
    return encodeURIComponent(String(key)) + "=" + encodeURIComponent(String(value));
}

/**
 * 将对象转换为查询参数字符串
 *
 * @memberOf string
 * @param {Object} obj 要转换成查询字符串的对象
 * @return {String} 返回转换后的查询参数字符串
 */
_.toQueryString = function(obj){
    var result=[];
    for(var key in obj){
        result.push(_.toQueryPair(key, obj[key]));
    }
    return result.join("&");
}

/**
 * 全局替换指定的字符串
 *
 * @memberOf string
 * @param {Object} string 需要替换字符串的字符串
 * @param {Object} reallyDo 需要替换什么字符串
 * @param {Object} replaceWith 替换为
 * @param {Object} ignoreCase 是否忽略大小写
 * @return {String} 返回替换后的字符串
 */
_.replaceAll = function(string, reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return string.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);
    } else {
        return string.replace(reallyDo, replaceWith);
    }
};

/**
 * 判断给定字符串是否是数字
 * @memberOf string
 * @name isNumber
 * @function
 *
 * @param {String} string
 * @param {Number} n
 * @return {String}
 */
_.isNumber = function(string){
    return _.toString(string).search(/^\d+$/) !== -1;
};

/**
 * 判断给定字符串是否是邮箱格式
 * @memberOf string
 * @param {String} emailStr
 * @return {Boolean}
 */
_.isEmail = function(string){
  return string.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) !== -1;
};

module.exports = {
  string: _
};
