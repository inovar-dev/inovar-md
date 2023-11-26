import 'core-js/modules/es.array.iterator.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.string.iterator.js';
import 'core-js/modules/web.dom-collections.iterator.js';
import 'core-js/modules/web.dom-collections.for-each.js';
import 'core-js/modules/es.array.map.js';
import 'core-js/modules/es.array.slice.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.string.replace.js';
import 'core-js/modules/es.string.match.js';
import 'core-js/modules/es.regexp.constructor.js';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.array.reduce.js';
import 'core-js/modules/es.array.filter.js';
import 'core-js/modules/es.array.join.js';

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var InovarMd = /*#__PURE__*/function (_HTMLElement) {
  _inherits(InovarMd, _HTMLElement);
  var _super = _createSuper(InovarMd);
  function InovarMd(defaults) {
    var _this$root;
    var _this;
    _classCallCheck(this, InovarMd);
    _this = _super.call(this);
    _this.version = '$VERSION';
    _this.config = _objectSpread2(_objectSpread2({
      markedUrl: 'https://cdn.jsdelivr.net/gh/markedjs/marked@4/marked.min.js',
      prismUrl: [
      //   ['https://cdn.jsdelivr.net/gh/PrismJS/prism@1/prism.min.js', 'data-manual'],
      //   'https://cdn.jsdelivr.net/gh/PrismJS/prism@1/plugins/autoloader/prism-autoloader.min.js',
      'https://cdn.jsdelivr.net/gh/phothinmg/ptm@main/prism.js'],
      cssUrls: ['https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@4/github-markdown.min.css',
      //   'https://cdn.jsdelivr.net/gh/PrismJS/prism@1/themes/prism.min.css',
      'https://cdn.jsdelivr.net/gh/phothinmg/ptm@main/prism.css'],
      hostCss: ':host{display:block;position:relative;contain:content;}:host([hidden]){display:none;}'
    }, defaults), window.ZeroMdConfig);
    _this.root = _this.hasAttribute('no-shadow') ? _assertThisInitialized(_this) : _this.attachShadow({
      mode: 'open'
    });
    (_this$root = _this.root).prepend.apply(_this$root, _toConsumableArray(_this.makeNodes("<div class=\"markdown-styles\"></div><div class=\"markdown-body\"></div>")));
    if (!_this.constructor.ready) {
      _this.constructor.ready = Promise.all([!!window.marked || _this.loadScript(_this.config.markedUrl), !!window.Prism || _this.loadScript(_this.config.prismUrl)]);
    }
    _this.clicked = _this.clicked.bind(_assertThisInitialized(_this));
    if (!_this.manualRender) {
      // Scroll to hash id after first render. However, `history.scrollRestoration` inteferes with this
      // on refresh. It's much better to use a `setTimeout` rather than to alter the browser's behaviour.
      _this.render().then(function () {
        return setTimeout(function () {
          return _this.goto(location.hash);
        }, 250);
      });
    }
    _this.observer = new MutationObserver(function () {
      _this.observeChanges();
      if (!_this.manualRender) _this.render();
    });
    _this.observer.observe(_assertThisInitialized(_this), {
      childList: true
    });
    _this.observeChanges();
    return _this;
  }

  /**
   * Start observing changes, if not already so, in `template` and `script`.
   */
  _createClass(InovarMd, [{
    key: "src",
    get: function get() {
      return this.getAttribute('src');
    },
    set: function set(val) {
      this.reflect('src', val);
    }
  }, {
    key: "manualRender",
    get: function get() {
      return this.hasAttribute('manual-render');
    },
    set: function set(val) {
      this.reflect('manual-render', val);
    }
  }, {
    key: "reflect",
    value: function reflect(name, val) {
      if (val === false) {
        this.removeAttribute(name);
      } else {
        this.setAttribute(name, val === true ? '' : val);
      }
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, val) {
      if (name === 'src' && this.connected && !this.manualRender && val !== old) {
        this.render();
      }
    }
  }, {
    key: "observeChanges",
    value: function observeChanges() {
      var _this2 = this;
      this.querySelectorAll('template,script[type="text/markdown"]').forEach(function (n) {
        _this2.observer.observe(n.content || n, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true
        });
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this3 = this;
      this.connected = true;
      this.fire('inovar-md-connected', {}, {
        bubbles: false,
        composed: false
      });
      this.waitForReady().then(function () {
        _this3.fire('inovar-md-ready');
      });
      if (this.shadowRoot) {
        this.shadowRoot.addEventListener('click', this.clicked);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.connected = false;
      if (this.shadowRoot) {
        this.shadowRoot.removeEventListener('click', this.clicked);
      }
    }
  }, {
    key: "waitForReady",
    value: function waitForReady() {
      var _this4 = this;
      var ready = this.connected || new Promise(function (resolve) {
        _this4.addEventListener('inovar-md-connected', function handler() {
          this.removeEventListener('inovar-md-connected', handler);
          resolve();
        });
      });
      return Promise.all([this.constructor.ready, ready]);
    }
  }, {
    key: "fire",
    value: function fire(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        bubbles: true,
        composed: true
      };
      if (detail.msg) {
        console.warn(detail.msg);
      }
      this.dispatchEvent(new CustomEvent(name, _objectSpread2({
        detail: _objectSpread2({
          node: this
        }, detail)
      }, opts)));
    }
  }, {
    key: "tick",
    value: function tick() {
      return new Promise(function (resolve) {
        return requestAnimationFrame(resolve);
      });
    }

    // Coerce anything into an array
  }, {
    key: "arrify",
    value: function arrify(any) {
      return any ? Array.isArray(any) ? any : [any] : [];
    }

    // Promisify an element's onload callback
  }, {
    key: "onload",
    value: function onload(node) {
      return new Promise(function (resolve, reject) {
        node.onload = resolve;
        node.onerror = function (err) {
          return reject(err.path ? err.path[0] : err.composedPath()[0]);
        };
      });
    }

    // Load a url or load (in order) an array of urls via <script> tags
  }, {
    key: "loadScript",
    value: function loadScript(urls) {
      var _this5 = this;
      return Promise.all(this.arrify(urls).map(function (item) {
        var _this5$arrify = _this5.arrify(item),
          _this5$arrify2 = _toArray(_this5$arrify),
          url = _this5$arrify2[0],
          attrs = _this5$arrify2.slice(1);
        var el = document.createElement('script');
        el.src = url;
        el.async = false;
        attrs.forEach(function (attr) {
          return el.setAttribute(attr, '');
        });
        return _this5.onload(document.head.appendChild(el));
      }));
    }

    // Scroll to selected element
  }, {
    key: "goto",
    value: function goto(sel) {
      var el;
      try {
        el = this.root.querySelector(sel);
      } catch (_unused) {}
      if (el) el.scrollIntoView();
    }

    // Hijack same-doc anchor hash links
  }, {
    key: "clicked",
    value: function clicked(ev) {
      if (ev.metaKey || ev.ctrlKey || ev.altKey || ev.shiftKey || ev.defaultPrevented) {
        return;
      }
      var a = ev.target.closest('a');
      if (a && a.hash && a.host === location.host && a.pathname === location.pathname) {
        this.goto(a.hash);
      }
    }
  }, {
    key: "dedent",
    value: function dedent(str) {
      str = str.replace(/^\n/, '');
      var match = str.match(/^\s+/);
      return match ? str.replace(new RegExp("^".concat(match[0]), 'gm'), '') : str;
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl(src) {
      var a = document.createElement('a');
      a.href = src;
      return a.href.substring(0, a.href.lastIndexOf('/') + 1);
    }

    // Runs Prism highlight async; falls back to sync if Web Workers throw
  }, {
    key: "highlight",
    value: function highlight(container) {
      return new Promise(function (resolve) {
        var unhinted = container.querySelectorAll('pre>code:not([class*="language-"])');
        unhinted.forEach(function (n) {
          // Dead simple language detection :)
          var lang = n.innerText.match(/^\s*</) ? 'markup' : n.innerText.match(/^\s*(\$|#)/) ? 'bash' : 'js';
          n.classList.add("language-".concat(lang));
        });
        try {
          window.Prism.highlightAllUnder(container, true, resolve());
        } catch (_unused2) {
          window.Prism.highlightAllUnder(container);
          resolve();
        }
      });
    }

    /**
     * Converts HTML string into HTMLCollection of nodes
     * @param {string} html
     * @returns {HTMLCollection}
     */
  }, {
    key: "makeNodes",
    value: function makeNodes(html) {
      var tpl = document.createElement('template');
      tpl.innerHTML = html;
      return tpl.content.children;
    }

    /**
     * Constructs the styles dom and returns HTML string
     * @returns {string} `markdown-styles` string
     */
  }, {
    key: "buildStyles",
    value: function buildStyles() {
      var _this6 = this;
      var get = function get(query) {
        var node = _this6.querySelector(query);
        return node ? node.innerHTML || ' ' : '';
      };
      var urls = this.arrify(this.config.cssUrls);
      var html = "<style>".concat(this.config.hostCss, "</style>").concat(get('template[data-merge="prepend"]')).concat(get('template:not([data-merge])') || urls.reduce(function (a, c) {
        return "".concat(a, "<link rel=\"stylesheet\" href=\"").concat(c, "\">");
      }, '')).concat(get('template[data-merge="append"]'));
      return html;
    }

    /**
     * Constructs the markdown body nodes and returns HTML string
     * @param {*} opts Markedjs options
     * @returns {Promise<string>} `markdown-body` string
     */
  }, {
    key: "buildMd",
    value: (function () {
      var _buildMd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this7 = this;
        var opts,
          src,
          script,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              opts = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              src = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var resp, md;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (_this7.src) {
                          _context.next = 2;
                          break;
                        }
                        return _context.abrupt("return", '');
                      case 2:
                        _context.next = 4;
                        return fetch(_this7.src);
                      case 4:
                        resp = _context.sent;
                        if (!resp.ok) {
                          _context.next = 12;
                          break;
                        }
                        _context.next = 8;
                        return resp.text();
                      case 8:
                        md = _context.sent;
                        return _context.abrupt("return", window.marked.parse(md, _objectSpread2({
                          baseUrl: _this7.getBaseUrl(_this7.src)
                        }, opts)));
                      case 12:
                        _this7.fire('inovar-md-error', {
                          msg: "[inovar-md] HTTP error ".concat(resp.status, " while fetching src"),
                          status: resp.status,
                          src: _this7.src
                        });
                        return _context.abrupt("return", '');
                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function src() {
                  return _ref.apply(this, arguments);
                };
              }();
              script = function script() {
                var el = _this7.querySelector('script[type="text/markdown"]');
                if (!el) return '';
                var md = el.hasAttribute('data-dedent') ? _this7.dedent(el.text) : el.text;
                return window.marked.parse(md, opts);
              };
              _context2.next = 5;
              return src();
            case 5:
              _context2.t0 = _context2.sent;
              if (_context2.t0) {
                _context2.next = 8;
                break;
              }
              _context2.t0 = script();
            case 8:
              return _context2.abrupt("return", _context2.t0);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function buildMd() {
        return _buildMd.apply(this, arguments);
      }
      return buildMd;
    }()
    /**
     * Returns 32-bit DJB2a hash in base36
     * @param {string} str
     * @returns {string}
     */
    )
  }, {
    key: "getHash",
    value: function getHash(str) {
      var hash = 5381;
      for (var index = 0; index < str.length; index++) {
        hash = (hash << 5) + hash ^ str.charCodeAt(index);
      }
      return (hash >>> 0).toString(36);
    }

    /**
     * Insert or replace styles node in root from a HTML string. If there are external stylesheet
     * links, wait for them to load.
     * @param {string} html styles string
     * @returns {Promise<boolean|undefined>} returns true if stamped
     */
  }, {
    key: "stampStyles",
    value: (function () {
      var _stampStyles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(html) {
        var _this8 = this;
        var hash, target, nodes, links;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              hash = this.getHash(html);
              target = this.root.querySelector('.markdown-styles');
              if (!(target.getAttribute('data-hash') !== hash)) {
                _context3.next = 11;
                break;
              }
              target.setAttribute('data-hash', hash);
              nodes = this.makeNodes(html);
              links = _toConsumableArray(nodes).filter(function (i) {
                return i.tagName === 'LINK' && i.getAttribute('rel') === 'stylesheet';
              });
              target.innerHTML = '';
              target.append.apply(target, _toConsumableArray(nodes));
              _context3.next = 10;
              return Promise.all(links.map(function (l) {
                return _this8.onload(l);
              })).catch(function (err) {
                _this8.fire('inovar-md-error', {
                  msg: '[inovar-md] An external stylesheet failed to load',
                  status: undefined,
                  src: err.href
                });
              });
            case 10:
              return _context3.abrupt("return", true);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function stampStyles(_x) {
        return _stampStyles.apply(this, arguments);
      }
      return stampStyles;
    }()
    /**
     * Insert or replace HTML body string into DOM
     * @param {string} html markdown-body string
     * @param {string[]} [classes] list of classes to apply to `.markdown-body` wrapper
     * @returns {Promise<boolean|undefined>} returns true if stamped
     */
    )
  }, {
    key: "stampBody",
    value: (function () {
      var _stampBody = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(html, classes) {
        var names, hash, target, nodes;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              names = this.arrify(classes);
              hash = this.getHash(html + JSON.stringify(names));
              target = this.root.querySelector('.markdown-body');
              if (!(target.getAttribute('data-hash') !== hash)) {
                _context4.next = 13;
                break;
              }
              target.setAttribute('data-hash', hash);
              names.unshift('markdown-body');
              target.setAttribute('class', names.join(' '));
              nodes = this.makeNodes(html);
              target.innerHTML = '';
              target.append.apply(target, _toConsumableArray(nodes));
              _context4.next = 12;
              return this.highlight(target);
            case 12:
              return _context4.abrupt("return", true);
            case 13:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function stampBody(_x2, _x3) {
        return _stampBody.apply(this, arguments);
      }
      return stampBody;
    }())
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var opts,
          pending,
          styles,
          body,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              opts = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
              _context5.next = 3;
              return this.waitForReady();
            case 3:
              pending = this.buildMd(opts);
              _context5.next = 6;
              return this.stampStyles(this.buildStyles());
            case 6:
              styles = _context5.sent;
              _context5.next = 9;
              return this.tick();
            case 9:
              _context5.t0 = this;
              _context5.next = 12;
              return pending;
            case 12:
              _context5.t1 = _context5.sent;
              _context5.t2 = opts.classes;
              _context5.next = 16;
              return _context5.t0.stampBody.call(_context5.t0, _context5.t1, _context5.t2);
            case 16:
              body = _context5.sent;
              this.fire('inovar-md-rendered', {
                node: this,
                stamped: {
                  styles: styles,
                  body: body
                }
              });
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function render() {
        return _render.apply(this, arguments);
      }
      return render;
    }()
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['src'];
    }
  }]);
  return InovarMd;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('inovar-md', InovarMd);

export { InovarMd };
//# sourceMappingURL=index.mjs.map
