var assert = chai.assert;

describe('Core', function(){
  describe('#mixin()', function(){
    it('混入函数mixin', function(){
      assert.propertyVal($w.mixin({}, {"a":1,"b":2}), 'a', 1);
      assert.propertyVal($w.mixin({}, {"a":1,"b":2}), 'b', 2);
      assert.propertyVal($w.mixin({"c":3}, {"a":1,"b":2}), 'c', 3);
    });
  });
});

describe('String', function(){
  describe('#toString()', function(){
    it('将对象转换为字符串', function(){
      assert.equal("100", $w.string.toString(100));
      assert.equal("true", $w.string.toString(true));
      assert.equal("1", $w.string.toString(001));
      assert.equal("10", $w.string.toString(10.0));
      assert.equal("10.01", $w.string.toString(10.01));
      assert.equal("-1", $w.string.toString(-1));
      assert.equal("-1", $w.string.toString(-1));
      assert.equal("[object Object]", $w.string.toString({}));
      assert.equal("", $w.string.toString([]));
      assert.equal("1,2,3,4", $w.string.toString([1,2,3,4]));
    });
  });

  describe('#isURL()', function(){
    it('判断字符串是否为URL', function(){
      assert.equal(true, $w.string.isURL("http://www.eeve.me"));
      assert.equal(true, $w.string.isURL("https://www.eeve.me"));
      assert.equal(true, $w.string.isURL("https://www.eeve.me:80"));
      assert.equal(true, $w.string.isURL("https://www.eeve.me:80/abc"));
      assert.equal(true, $w.string.isURL("https://www.eeve.me:80/abc?grep=foo"));
      assert.equal(false, $w.string.isURL("www.eeve.me"));
      assert.equal(false, $w.string.isURL("abcd"));
    });
  });

  describe('#parseURL()', function(){
    it('分解 URL 为一个对象', function(){
      var urlObj = $w.string.parseURL("http://www.eeve.me");
      assert.isObject(urlObj);
      assert.propertyVal(urlObj, 'host', "www.eeve.me");
      assert.propertyVal(urlObj, 'path', "");
      assert.propertyVal(urlObj, 'port', "");
      assert.propertyVal(urlObj, 'query', undefined);
      assert.propertyVal(urlObj, 'scheme', "http");
      assert.propertyVal(urlObj, 'fragment', undefined);
      assert.propertyVal(urlObj, 'pass', undefined);

      var urlObj2 = $w.string.parseURL("https://www.eeve.me");
      assert.isObject(urlObj2);
      assert.propertyVal(urlObj2, 'scheme', "https");

      var urlObj3 = $w.string.parseURL("https://www.eeve.me:80");
      assert.isObject(urlObj3);
      assert.propertyVal(urlObj3, 'port', "80");

      var urlObj4 = $w.string.parseURL("https://www.eeve.me:80/abc");
      assert.isObject(urlObj4);
      assert.propertyVal(urlObj4, 'path', "/abc");

      var urlObj5 = $w.string.parseURL("https://www.eeve.me:80/abc?grep=foo&name=john");
      assert.isObject(urlObj5);
      assert.propertyVal(urlObj5, 'query', 'grep=foo&name=john');

      assert.equal(null, $w.string.parseURL("www.eeve.me"));
      assert.equal(null, $w.string.parseURL("abcd"));

    });
  });

  describe('#mapQuery()', function(){
    it('将 url 的查询字符串参数映射成对象', function(){
      var url = "http://domain.com/?p1=1&p2=2";
      assert.propertyVal($w.string.mapQuery(url), 'p1', '1');
      assert.propertyVal($w.string.mapQuery(url), 'p2', '2');
      assert.notProperty($w.string.mapQuery(url), 'p3', 'is bad');
    });
  });

  describe('#contains()', function(){
    it('判断是否含有指定的字符串', function(){
      var str = "abcd1234xyz";
      assert.equal(true, $w.string.contains(str,'abc'));
      assert.equal(true, $w.string.contains(str,'abcd'));
      assert.equal(true, $w.string.contains(str,'1234'));
      assert.equal(true, $w.string.contains(str,'xyz'));
      assert.equal(false, $w.string.contains(str,'xz'));
      assert.equal(true, $w.string.contains(str,'abcd1234xyz','$'));
    });
  });

  describe('#trim()', function(){
    it('清除字符串开头和结尾的空格', function(){
      assert.equal("abc", $w.string.trim("  abc  "));
      assert.equal("a b c", $w.string.trim("  a b c  "));
      assert.equal("abc", $w.string.trim("abc"));
      assert.equal("abc", $w.string.trim(" abc"));
      assert.equal("abc", $w.string.trim("abc "));
    });
  });

  describe('#clean()', function(){
    it('清除字符串开头和结尾的空格，并把字符串之间的多个空格转换为一个空格', function(){
      assert.equal("abc", $w.string.clean("  abc  "));
      assert.equal("a b c", $w.string.clean("  a b c  "));
      assert.equal("abc", $w.string.clean("abc"));
      assert.equal("abc", $w.string.clean(" abc"));
      assert.equal("abc", $w.string.clean("abc "));
      assert.equal("a b c", $w.string.clean("a  b  c "));
    });
  });

  describe('#camelCase()', function(){
    it('将“-”连接的字符串转换成驼峰式写法', function(){
      assert.equal("aBC", $w.string.camelCase("a-b-c"));
      assert.equal("helloWorld", $w.string.camelCase("hello-world"));
      assert.equal("helloworld", $w.string.camelCase("helloworld"));
      assert.equal("111", $w.string.camelCase("111"));
      assert.equal("111", $w.string.camelCase(111));
    });
  });

  describe('#hyphenate()', function(){
    it('将驼峰式写法字符串转换成“-”连接的', function(){
      assert.equal("a-b-c", $w.string.hyphenate("aBC"));
      assert.equal("hello-world", $w.string.hyphenate("helloWorld"));
      assert.equal("helloworld", $w.string.hyphenate("helloworld"));
      assert.equal("111", $w.string.hyphenate("111"));
      assert.equal("111", $w.string.hyphenate(111));
    });
  });

  describe('#capitalize()', function(){
    it('将字符串转换成首字母大写', function(){
      assert.equal("ABC", $w.string.capitalize("aBC"));
      assert.equal("HelloWorld", $w.string.capitalize("helloWorld"));
      assert.equal("Helloworld", $w.string.capitalize("helloworld"));
      assert.equal("Hello World", $w.string.capitalize("hello world"));
    });
  });

  describe('#toInt()', function(){
    it('将字符串转换成整数', function(){
      assert.isNaN($w.string.toInt("aBC"));
      assert.equal("1", $w.string.toInt("1"));
      assert.isNumber($w.string.toInt("1"));
      assert.equal(1, $w.string.toInt("1.00"));
      assert.equal(1, $w.string.toInt("1.61"));
      assert.equal(-1, $w.string.toInt("-1.61"));
    });
  });

  describe('#toFloat()', function(){
    it('将字符串转换成浮点数', function(){
      assert.isNaN($w.string.toFloat("aBC"));
      assert.equal("1", $w.string.toFloat("1"));
      assert.isNumber($w.string.toFloat("1"));
      assert.equal(1, $w.string.toFloat("1.00"));
      assert.equal(1.61, $w.string.toFloat("1.61"));
      assert.equal(-1.61, $w.string.toFloat("-1.61"));
    });
  });

  describe('#hexToRgb()', function(){
    it('将颜色 Hex 写法转换成 RGB 写法', function(){
      assert.equal("rgb(255,255,255)", $w.string.hexToRgb("fff"));
      assert.equal("rgb(255,255,255)", $w.string.hexToRgb("#fff"));
      assert.equal("rgb(255,255,255)", $w.string.hexToRgb("#FFF"));
      assert.equal("rgb(255,255,255)", $w.string.hexToRgb("#FFFFFF"));
      assert.isNull($w.string.hexToRgb("ab"));
    });
  });

  describe('#rgbToHex()', function(){
    it('将颜色 RGB 写法转换成 Hex 写法', function(){
      assert.equal($w.string.hexToRgb("fff"), "rgb(255,255,255)");
      assert.equal($w.string.hexToRgb("#fff"), "rgb(255,255,255)");
      assert.equal($w.string.hexToRgb("#FFF"), "rgb(255,255,255)");
      assert.equal($w.string.hexToRgb("#FFFFFF"), "rgb(255,255,255)");
      assert.isNull($w.string.hexToRgb("ab"));
    });
  });

  describe('#toQueryPair()', function(){
    it('编码查询参数', function(){
      assert.equal("foo=abc", $w.string.toQueryPair("foo","abc"));
      assert.equal("foo=%E4%B8%AD%E6%96%87", $w.string.toQueryPair("foo","中文"));
    });
  });

  describe('#toQueryString()', function(){
    it('将对象转换为查询参数字符串', function(){
      assert.equal("a=1&b=2", $w.string.toQueryString({a:1,b:2}));
      assert.equal("a=1&b=2", $w.string.toQueryString({"a":1,"b":2}));
      assert.equal("a=1&b=%E4%B8%AD%E6%96%87", $w.string.toQueryString({a:1,b:"中文"}));
    });
  });

  describe('#replaceAll()', function(){
    it('全局替换指定的字符串', function(){
      assert.equal("000123xyz000", $w.string.replaceAll("abc123xyzabc","abc","000"));
      assert.equal("000123xyz000", $w.string.replaceAll("abc123xyzabc","ABC","000", true));
      assert.equal("000123xyz000", $w.string.replaceAll("abc123xyzabc","aBc","000", true));
    });
  });

  describe('#isNumber()', function(){
    it('判断给定字符串是否是数字', function(){
      assert.equal(true, $w.string.isNumber("111"));
      assert.equal(false, $w.string.isNumber("aaa"));
      assert.equal(false, $w.string.isNumber("111aaa"));
      assert.equal(true, $w.string.isNumber(111));
    });
  });

  describe('#isEmail()', function(){
    it('判断给定字符串是否是邮箱格式', function(){
      assert.equal(true, $w.string.isEmail("abc@163.com"));
      assert.equal(true, $w.string.isEmail("abc@163.com.cn"));
      assert.equal(true, $w.string.isEmail("abc.bac@163.com"));
      assert.equal(false, $w.string.isEmail("abc$163.com"));
    });
  });
});



