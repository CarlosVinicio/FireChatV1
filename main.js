(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n  <h1>Firechat</h1>\r\n  <app-login ></app-login>\r\n  <app-chat></app-chat>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fireChat';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _pipes_no_own_user_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/no-own-user.pipe */ "./src/app/pipes/no-own-user.pipe.ts");





//Para trabajar con Firebase






// Services



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _pipes_no_own_user_pipe__WEBPACK_IMPORTED_MODULE_13__["NoOwnUserPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"frame\" *ngIf=\"_chatService.afAuth.user | async as user;\" >\n  <div id=\"sidepanel\">\n    <div id=\"profile\">\n      <div class=\"wrap\">\n        <img [src]=\"user.photoURL\" class=\"online\" alt=\"no fiti\" />\n        <p>{{user.displayName}}</p>\n        <div id=\"status-options\">\n          <ul>\n            <li id=\"status-online\" class=\"active\"><span class=\"status-circle\"></span> <p>Online</p></li>\n            <li id=\"status-away\"><span class=\"status-circle\"></span> <p>Away</p></li>\n            <li id=\"status-busy\"><span class=\"status-circle\"></span> <p>Busy</p></li>\n            <li id=\"status-offline\"><span class=\"status-circle\"></span> <p>Offline</p></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div id=\"search\">\n      <label for=\"\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></label>\n      <input type=\"text\" placeholder=\"Search contacts...\" />\n    </div>\n    <div id=\"contacts\">\n      <ul>\n        <div  *ngFor=\"let localuser of users\">\n          <li class=\"contact\" *ngIf=\"user.uid != localuser.uid\" (click)=\"getContactData(user.uid ,localuser)\">\n            <div class=\"wrap\" [ngClass]=\"{'is-online': user}\">\n              <img [src]=\"localuser.img\" alt=\"sd\" />\n              <div class=\"meta\">\n                <p class=\"name\">{{localuser.name}}</p>\n              </div>\n            </div>\n          </li>\n        </div>\n      </ul>\n    </div>\n  </div>\n  <div class=\"content\">\n    <div class=\"contact-profile\">\n      <img [src]=\"contact.img\" alt=\"\" />\n      <p>{{ contact.name }}</p>\n    </div>\n    <div class=\"messages\" id=\"app-mensajes\" >\n      <ul>\n        <li class=\"sent\" *ngFor=\"let chat of chats\" [ngClass]=\"{'sent': _chatService.user.uid == chat.uid, 'replies':_chatService.user.uid != chat.uid }\" >\n          <img [src]=\"chat.img\" alt=\"\" />\n          <p>{{ chat.message }}</p>\n        </li>\n      </ul>\n    </div>\n    <div class=\"message-input\">\n      <div class=\"wrap\">\n        <input style=\"width: 90%\" type=\"text\" [(ngModel)]=\"messageText\" (keyup.enter)=\"sendMessage()\" placeholder=\"Write your message...\" />\n        <button class=\"submit\" (click)=\"sendMessage()\"  ><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "> body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #27ae60;\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\n  font-size: 1em;\n  letter-spacing: 0.1px;\n  color: #32465a;\n  text-rendering: optimizeLegibility;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased; }\n\n#frame {\n  width: 95%;\n  min-width: 360px;\n  max-width: 1000px;\n  height: 92vh;\n  min-height: 300px;\n  max-height: 720px;\n  background: #E6EAEA; }\n\n@media screen and (max-width: 360px) {\n  #frame {\n    width: 100%;\n    height: 100vh; } }\n\n#frame #sidepanel {\n  float: left;\n  min-width: 280px;\n  max-width: 340px;\n  width: 40%;\n  height: 100%;\n  background: #2c3e50;\n  color: #f5f5f5;\n  overflow: hidden;\n  position: relative; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel {\n    width: 58px;\n    min-width: 58px; } }\n\n#frame #sidepanel #profile {\n  width: 80%;\n  margin: 25px auto; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile {\n    width: 100%;\n    margin: 0 auto;\n    padding: 5px 0 0 0;\n    background: #32465a; } }\n\n#frame #sidepanel #profile.expanded .wrap {\n  height: 210px;\n  line-height: initial; }\n\n#frame #sidepanel #profile.expanded .wrap p {\n  margin-top: 20px; }\n\n#frame #sidepanel #profile.expanded .wrap i.expand-button {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: \"FlipH\"; }\n\n#frame #sidepanel #profile .wrap {\n  height: 60px;\n  line-height: 60px;\n  overflow: hidden;\n  transition: 0.3s height ease; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap {\n    height: 55px; } }\n\n#frame #sidepanel #profile .wrap img {\n  width: 50px;\n  border-radius: 50%;\n  padding: 3px;\n  border: 2px solid #e74c3c;\n  height: auto;\n  float: left;\n  cursor: pointer;\n  transition: 0.3s border ease; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap img {\n    width: 40px;\n    margin-left: 4px; } }\n\n#frame #sidepanel #profile .wrap img.online {\n  border: 2px solid #2ecc71; }\n\n#frame #sidepanel #profile .wrap img.away {\n  border: 2px solid #f1c40f; }\n\n#frame #sidepanel #profile .wrap img.busy {\n  border: 2px solid #e74c3c; }\n\n#frame #sidepanel #profile .wrap img.offline {\n  border: 2px solid #95a5a6; }\n\n#frame #sidepanel #profile .wrap p {\n  float: left;\n  margin-left: 15px; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap p {\n    display: none; } }\n\n#frame #sidepanel #profile .wrap i.expand-button {\n  float: right;\n  margin-top: 23px;\n  font-size: 0.8em;\n  cursor: pointer;\n  color: #435f7a; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap i.expand-button {\n    display: none; } }\n\n#frame #sidepanel #profile .wrap #status-options {\n  position: absolute;\n  opacity: 0;\n  visibility: hidden;\n  width: 150px;\n  margin: 70px 0 0 0;\n  border-radius: 6px;\n  z-index: 99;\n  line-height: initial;\n  background: #435f7a;\n  transition: 0.3s all ease; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options {\n    width: 58px;\n    margin-top: 57px; } }\n\n#frame #sidepanel #profile .wrap #status-options.active {\n  opacity: 1;\n  visibility: visible;\n  margin: 75px 0 0 0; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options.active {\n    margin-top: 62px; } }\n\n#frame #sidepanel #profile .wrap #status-options:before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #435f7a;\n  margin: -8px 0 0 24px; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options:before {\n    margin-left: 23px; } }\n\n#frame #sidepanel #profile .wrap #status-options ul {\n  overflow: hidden;\n  border-radius: 6px; }\n\n#frame #sidepanel #profile .wrap #status-options ul li {\n  padding: 15px 0 30px 18px;\n  display: block;\n  cursor: pointer; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li {\n    padding: 15px 0 35px 22px; } }\n\n#frame #sidepanel #profile .wrap #status-options ul li:hover {\n  background: #496886; }\n\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin: 5px 0 0 0; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\n    width: 14px;\n    height: 14px; } }\n\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n  content: '';\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  margin: -3px 0 0 -3px;\n  background: transparent;\n  border-radius: 50%;\n  z-index: 0; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\n    height: 18px;\n    width: 18px; } }\n\n#frame #sidepanel #profile .wrap #status-options ul li p {\n  padding-left: 12px; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #profile .wrap #status-options ul li p {\n    display: none; } }\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {\n  background: #2ecc71; }\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {\n  border: 1px solid #2ecc71; }\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {\n  background: #f1c40f; }\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {\n  border: 1px solid #f1c40f; }\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {\n  background: #e74c3c; }\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\n  border: 1px solid #e74c3c; }\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {\n  background: #95a5a6; }\n\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\n  border: 1px solid #95a5a6; }\n\n#frame #sidepanel #profile .wrap #expanded {\n  padding: 100px 0 0 0;\n  display: block;\n  line-height: initial !important; }\n\n#frame #sidepanel #profile .wrap #expanded label {\n  float: left;\n  clear: both;\n  margin: 0 8px 5px 0;\n  padding: 5px 0; }\n\n#frame #sidepanel #profile .wrap #expanded input {\n  border: none;\n  margin-bottom: 6px;\n  background: #32465a;\n  border-radius: 3px;\n  color: #f5f5f5;\n  padding: 7px;\n  width: calc(100% - 43px); }\n\n#frame #sidepanel #profile .wrap #expanded input:focus {\n  outline: none;\n  background: #435f7a; }\n\n#frame #sidepanel #search {\n  border-top: 1px solid #32465a;\n  border-bottom: 1px solid #32465a;\n  font-weight: 300; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #search {\n    display: none; } }\n\n#frame #sidepanel #search label {\n  position: absolute;\n  margin: 10px 0 0 20px; }\n\n#frame #sidepanel #search input {\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n  padding: 10px 0 10px 46px;\n  width: calc(100% - 25px);\n  border: none;\n  background: #32465a;\n  color: #f5f5f5; }\n\n#frame #sidepanel #search input:focus {\n  outline: none;\n  background: #435f7a; }\n\n#frame #sidepanel #search input::-webkit-input-placeholder {\n  color: #f5f5f5; }\n\n#frame #sidepanel #search input::-moz-placeholder {\n  color: #f5f5f5; }\n\n#frame #sidepanel #search input:-ms-input-placeholder {\n  color: #f5f5f5; }\n\n#frame #sidepanel #search input:-moz-placeholder {\n  color: #f5f5f5; }\n\n#frame #sidepanel #contacts {\n  height: calc(100% - 177px);\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts {\n    height: calc(100% - 149px);\n    overflow-y: scroll;\n    overflow-x: hidden; }\n  #frame #sidepanel #contacts::-webkit-scrollbar {\n    display: none; } }\n\n#frame #sidepanel #contacts.expanded {\n  height: calc(100% - 334px); }\n\n#frame #sidepanel #contacts::-webkit-scrollbar {\n  width: 8px;\n  background: #2c3e50; }\n\n#frame #sidepanel #contacts::-webkit-scrollbar-thumb {\n  background-color: #243140; }\n\n#frame #sidepanel #contacts ul li.contact {\n  position: relative;\n  padding: 10px 0 15px 0;\n  font-size: 0.9em;\n  cursor: pointer; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact {\n    padding: 6px 0 46px 8px; } }\n\n#frame #sidepanel #contacts ul li.contact:hover {\n  background: #32465a; }\n\n#frame #sidepanel #contacts ul li.contact.active {\n  background: #32465a;\n  border-right: 5px solid #435f7a; }\n\n#frame #sidepanel #contacts ul li.contact.active span.contact-status {\n  border: 2px solid #32465a !important; }\n\n#frame #sidepanel #contacts ul li.contact .wrap {\n  width: 88%;\n  margin: 0 auto;\n  position: relative; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap {\n    width: 100%; } }\n\n#frame #sidepanel #contacts ul li.contact .wrap span {\n  position: absolute;\n  left: 0;\n  margin: -2px 0 0 -2px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 2px solid #2c3e50;\n  background: #95a5a6; }\n\n#frame #sidepanel #contacts ul li.contact .wrap span.online {\n  background: #2ecc71; }\n\n#frame #sidepanel #contacts ul li.contact .wrap span.away {\n  background: #f1c40f; }\n\n#frame #sidepanel #contacts ul li.contact .wrap span.busy {\n  background: #e74c3c; }\n\n#frame #sidepanel #contacts ul li.contact .wrap img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin-right: 10px; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap img {\n    margin-right: 0px; } }\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta {\n  padding: 5px 0 0 0; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\n    display: none; } }\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .name {\n  font-weight: 600; }\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\n  margin: 5px 0 0 0;\n  padding: 0 0 1px;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: 1s all ease; }\n\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\n  position: initial;\n  border-radius: initial;\n  background: none;\n  border: none;\n  padding: 0 2px 0 0;\n  margin: 0 0 0 1px;\n  opacity: .5; }\n\n#frame #sidepanel #bottom-bar {\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n#frame #sidepanel #bottom-bar button {\n  float: left;\n  border: none;\n  width: 50%;\n  padding: 10px 0;\n  background: #32465a;\n  color: #f5f5f5;\n  cursor: pointer;\n  font-size: 0.85em;\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button {\n    float: none;\n    width: 100%;\n    padding: 15px 0; } }\n\n#frame #sidepanel #bottom-bar button:focus {\n  outline: none; }\n\n#frame #sidepanel #bottom-bar button:nth-child(1) {\n  border-right: 1px solid #2c3e50; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\n    border-right: none;\n    border-bottom: 1px solid #2c3e50; } }\n\n#frame #sidepanel #bottom-bar button:hover {\n  background: #435f7a; }\n\n#frame #sidepanel #bottom-bar button i {\n  margin-right: 3px;\n  font-size: 1em; }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button i {\n    font-size: 1.3em; } }\n\n@media screen and (max-width: 735px) {\n  #frame #sidepanel #bottom-bar button span {\n    display: none; } }\n\n#frame .content {\n  float: right;\n  width: 60%;\n  height: 100%;\n  overflow: hidden;\n  position: relative; }\n\n@media screen and (max-width: 735px) {\n  #frame .content {\n    width: calc(100% - 58px);\n    min-width: 300px !important; } }\n\n@media screen and (min-width: 900px) {\n  #frame .content {\n    width: calc(100% - 340px); } }\n\n#frame .content .contact-profile {\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background: #f5f5f5; }\n\n#frame .content .contact-profile img {\n  width: 40px;\n  border-radius: 50%;\n  float: left;\n  margin: 9px 12px 0 9px; }\n\n#frame .content .contact-profile p {\n  float: left; }\n\n#frame .content .contact-profile .social-media {\n  float: right; }\n\n#frame .content .contact-profile .social-media i {\n  margin-left: 14px;\n  cursor: pointer; }\n\n#frame .content .contact-profile .social-media i:nth-last-child(1) {\n  margin-right: 20px; }\n\n#frame .content .contact-profile .social-media i:hover {\n  color: #435f7a; }\n\n#frame .content .messages {\n  height: auto;\n  min-height: calc(100% - 93px);\n  max-height: calc(100% - 93px);\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n@media screen and (max-width: 735px) {\n  #frame .content .messages {\n    max-height: calc(100% - 105px); } }\n\n#frame .content .messages::-webkit-scrollbar {\n  width: 8px;\n  background: transparent; }\n\n#frame .content .messages::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n#frame .content .messages ul li {\n  display: inline-block;\n  clear: both;\n  float: left;\n  margin: 15px 15px 5px 15px;\n  width: calc(100% - 25px);\n  font-size: 0.9em; }\n\n#frame .content .messages ul li:nth-last-child(1) {\n  margin-bottom: 20px; }\n\n#frame .content .messages ul li.sent img {\n  margin: 6px 8px 0 0; }\n\n#frame .content .messages ul li.sent p {\n  background: #435f7a;\n  color: #f5f5f5; }\n\n#frame .content .messages ul li.replies img {\n  float: right;\n  margin: 6px 0 0 8px; }\n\n#frame .content .messages ul li.replies p {\n  background: #f5f5f5;\n  float: right; }\n\n#frame .content .messages ul li img {\n  width: 22px;\n  border-radius: 50%;\n  float: left; }\n\n#frame .content .messages ul li p {\n  display: inline-block;\n  padding: 10px 15px;\n  border-radius: 20px;\n  max-width: 205px;\n  line-height: 130%; }\n\n@media screen and (min-width: 735px) {\n  #frame .content .messages ul li p {\n    max-width: 300px; } }\n\n#frame .content .message-input {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 99; }\n\n#frame .content .message-input .wrap {\n  position: relative; }\n\n#frame .content .message-input .wrap input {\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\n  float: left;\n  border: none;\n  width: calc(100% - 90px);\n  padding: 11px 32px 10px 8px;\n  font-size: 0.8em;\n  color: #32465a; }\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap input {\n    padding: 15px 32px 16px 8px; } }\n\n#frame .content .message-input .wrap input:focus {\n  outline: none; }\n\n#frame .content .message-input .wrap .attachment {\n  position: absolute;\n  right: 60px;\n  z-index: 4;\n  margin-top: 10px;\n  font-size: 1.1em;\n  color: #435f7a;\n  opacity: .5;\n  cursor: pointer; }\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap .attachment {\n    margin-top: 17px;\n    right: 65px; } }\n\n#frame .content .message-input .wrap .attachment:hover {\n  opacity: 1; }\n\n#frame .content .message-input .wrap button {\n  float: right;\n  border: none;\n  width: 50px;\n  padding: 12px 0;\n  cursor: pointer;\n  background: #32465a;\n  color: #f5f5f5; }\n\n@media screen and (max-width: 735px) {\n  #frame .content .message-input .wrap button {\n    padding: 16px 0; } }\n\n#frame .content .message-input .wrap button:hover {\n  background: #435f7a; }\n\n#frame .content .message-input .wrap button:focus {\n  outline: none; }\n\n.is-online {\n  color: lawngreen; }\n\n.is-offline {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9EOlxcQ3Vyc29zXFxGaXJlY2hhdFYxL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQiwyREFBMEQ7RUFDMUQsZUFBYztFQUNkLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QsbUNBQWtDO0VBQ2xDLDhDQUE2QztFQUM3QyxvQ0FBbUMsRUFDcEM7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRTtJQUNFLFlBQVc7SUFDWCxjQUFhLEVBQ2QsRUFBQTs7QUFFSDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFdBQVU7RUFDVixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0U7SUFDRSxZQUFXO0lBQ1gsZ0JBQWUsRUFDaEIsRUFBQTs7QUFFSDtFQUNFLFdBQVU7RUFDVixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRTtJQUNFLFlBQVc7SUFDWCxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLG9CQUFtQixFQUNwQixFQUFBOztBQUVIO0VBQ0UsY0FBYTtFQUNiLHFCQUFvQixFQUNyQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUdFLDhCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsc0JBQWE7VUFBYixjQUFhO0VBQ2Isb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGtCQUFp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QWtCLEVBQ25COztBQUNEO0VBQ0UsNERBQTJEO0VBQzNELFlBQVc7RUFDWCxhQUFZO0VBQ1oseUJBQXdCO0VBQ3hCLDRCQUEyQjtFQUMzQixpQkFBZ0I7RUFDaEIsZUFBYyxFQUNmOztBQUNEO0VBQ0U7SUFDRSw0QkFBMkIsRUFDNUIsRUFBQTs7QUFFSDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVTtFQUNWLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLFlBQVc7RUFDWCxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFO0lBQ0UsaUJBQWdCO0lBQ2hCLFlBQVcsRUFDWixFQUFBOztBQUVIO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGFBQVk7RUFDWixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRTtJQUNFLGdCQUFlLEVBQ2hCLEVBQUE7O0FBRUg7RUFDRSxvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIj4gYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzI3YWU2MDtcbiAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGNvbG9yOiAjMzI0NjVhO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjAwNCk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyB9XG5cbiNmcmFtZSB7XG4gIHdpZHRoOiA5NSU7XG4gIG1pbi13aWR0aDogMzYwcHg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBoZWlnaHQ6IDkydmg7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiA3MjBweDtcbiAgYmFja2dyb3VuZDogI0U2RUFFQTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAjZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtYXgtd2lkdGg6IDM0MHB4O1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwge1xuICAgIHdpZHRoOiA1OHB4O1xuICAgIG1pbi13aWR0aDogNThweDsgfSB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyNXB4IGF1dG87IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwIDAgMDtcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhOyB9IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUuZXhwYW5kZWQgLndyYXAge1xuICBoZWlnaHQ6IDIxMHB4O1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCBwIHtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCBpLmV4cGFuZC1idXR0b24ge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICBmaWx0ZXI6IEZsaXBIO1xuICAtbXMtZmlsdGVyOiBcIkZsaXBIXCI7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBoZWlnaHQgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBoZWlnaHQgZWFzZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XG4gICAgaGVpZ2h0OiA1NXB4OyB9IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogMC4zcyBib3JkZXIgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDsgfSB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5vbmxpbmUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMmVjYzcxOyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5hd2F5IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YxYzQwZjsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcuYnVzeSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNzRjM2M7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaW1nLm9mZmxpbmUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTVhNWE2OyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgcCB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGkuZXhwYW5kLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMjNweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzQzNWY3YTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpLmV4cGFuZC1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDcwcHggMCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogOTk7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMge1xuICAgIHdpZHRoOiA1OHB4O1xuICAgIG1hcmdpbi10b3A6IDU3cHg7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgbWFyZ2luOiA3NXB4IDAgMCAwOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucy5hY3RpdmUge1xuICAgIG1hcmdpbi10b3A6IDYycHg7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnM6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjNDM1ZjdhO1xuICBtYXJnaW46IC04cHggMCAwIDI0cHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zOmJlZm9yZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA2cHg7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHtcbiAgcGFkZGluZzogMTVweCAwIDMwcHggMThweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkge1xuICAgIHBhZGRpbmc6IDE1cHggMCAzNXB4IDIycHg7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDk2ODg2OyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiA1cHggMCAwIDA7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHNwYW4uc3RhdHVzLWNpcmNsZSB7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4OyB9IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDA7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDsgfSB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBwIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vbmxpbmUgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogIzJlY2M3MTsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLW9ubGluZS5hY3RpdmUgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZWNjNzE7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1hd2F5IHNwYW4uc3RhdHVzLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICNmMWM0MGY7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1hd2F5LmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxYzQwZjsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWJ1c3kgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcbiAgYmFja2dyb3VuZDogI2U3NGMzYzsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkjc3RhdHVzLWJ1c3kuYWN0aXZlIHNwYW4uc3RhdHVzLWNpcmNsZTpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTc0YzNjOyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb2ZmbGluZSBzcGFuLnN0YXR1cy1jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjOTVhNWE2OyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb2ZmbGluZS5hY3RpdmUgc3Bhbi5zdGF0dXMtY2lyY2xlOmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NWE1YTY7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIHtcbiAgcGFkZGluZzogMTAwcHggMCAwIDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogaW5pdGlhbCAhaW1wb3J0YW50OyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCBsYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiAwIDhweCA1cHggMDtcbiAgcGFkZGluZzogNXB4IDA7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGJhY2tncm91bmQ6ICMzMjQ2NWE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDdweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpOyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM0MzVmN2E7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzI0NjVhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMyNDY1YTtcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAxMHB4IDAgMCAyMHB4OyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQge1xuICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDQ2cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xuICBjb2xvcjogI2Y1ZjVmNTsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzQzNWY3YTsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmNWY1ZjU7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZjVmNWY1OyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmNWY1ZjU7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmNWY1ZjU7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNzdweCk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNDlweCk7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzLmV4cGFuZGVkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMzRweCk7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDMxNDA7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMCAxNXB4IDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCB7XG4gICAgcGFkZGluZzogNnB4IDAgNDZweCA4cHg7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMjQ2NWE7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzMyNDY1YTtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQzNWY3YTsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdC5hY3RpdmUgc3Bhbi5jb250YWN0LXN0YXR1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ2NWEgIWltcG9ydGFudDsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCB7XG4gIHdpZHRoOiA4OCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAge1xuICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAtMnB4IDAgMCAtMnB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyYzNlNTA7XG4gIGJhY2tncm91bmQ6ICM5NWE1YTY7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5vbmxpbmUge1xuICBiYWNrZ3JvdW5kOiAjMmVjYzcxOyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHNwYW4uYXdheSB7XG4gIGJhY2tncm91bmQ6ICNmMWM0MGY7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5idXN5IHtcbiAgYmFja2dyb3VuZDogI2U3NGMzYzsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XG4gIHBhZGRpbmc6IDVweCAwIDAgMDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAucHJldmlldyB7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xuICBwYWRkaW5nOiAwIDAgMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLW1vei10cmFuc2l0aW9uOiAxcyBhbGwgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XG4gIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlOyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIC5wcmV2aWV3IHNwYW4ge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwIDJweCAwIDA7XG4gIG1hcmdpbjogMCAwIDAgMXB4O1xuICBvcGFjaXR5OiAuNTsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDsgfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24ge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJhY2tncm91bmQ6ICMzMjQ2NWE7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7IH0gfVxuXG4jZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lOyB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMmMzZTUwOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDsgfSB9XG5cbiNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0MzVmN2E7IH1cblxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxZW07IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIGkge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b24gc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbiNmcmFtZSAuY29udGVudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lIC5jb250ZW50IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNThweCk7XG4gICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgI2ZyYW1lIC5jb250ZW50IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzQwcHgpOyB9IH1cblxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA5cHggMTJweCAwIDlweDsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSBwIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSAuc29jaWFsLW1lZGlhIGkge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbiNmcmFtZSAuY29udGVudCAuY29udGFjdC1wcm9maWxlIC5zb2NpYWwtbWVkaWEgaTpudGgtbGFzdC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSAuc29jaWFsLW1lZGlhIGk6aG92ZXIge1xuICBjb2xvcjogIzQzNWY3YTsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA5M3B4KTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gOTNweCk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDEwNXB4KTsgfSB9XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDE1cHggMTVweCA1cHggMTVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xuICBmb250LXNpemU6IDAuOWVtOyB9XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGk6bnRoLWxhc3QtY2hpbGQoMSkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCBpbWcge1xuICBtYXJnaW46IDZweCA4cHggMCAwOyB9XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCBwIHtcbiAgYmFja2dyb3VuZDogIzQzNWY3YTtcbiAgY29sb3I6ICNmNWY1ZjU7IH1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIGltZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA2cHggMCAwIDhweDsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnJlcGxpZXMgcCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIGltZyB7XG4gIHdpZHRoOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXgtd2lkdGg6IDIwNXB4O1xuICBsaW5lLWhlaWdodDogMTMwJTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIHAge1xuICAgIG1heC13aWR0aDogMzAwcHg7IH0gfVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OyB9XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQge1xuICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcbiAgcGFkZGluZzogMTFweCAzMnB4IDEwcHggOHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzMyNDY1YTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQge1xuICAgIHBhZGRpbmc6IDE1cHggMzJweCAxNnB4IDhweDsgfSB9XG5cbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNjBweDtcbiAgei1pbmRleDogNDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6ICM0MzVmN2E7XG4gIG9wYWNpdHk6IC41O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIHJpZ2h0OiA2NXB4OyB9IH1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50OmhvdmVyIHtcbiAgb3BhY2l0eTogMTsgfVxuXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzMyNDY1YTtcbiAgY29sb3I6ICNmNWY1ZjU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcbiAgI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTZweCAwOyB9IH1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0MzVmN2E7IH1cblxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLmlzLW9ubGluZSB7XG4gIGNvbG9yOiBsYXduZ3JlZW47IH1cblxuLmlzLW9mZmxpbmUge1xuICBjb2xvcjogcmVkOyB9XG4iLCI+Ym9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICMyN2FlNjA7XHJcbiAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gIGNvbG9yOiAjMzI0NjVhO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMDQpO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4jZnJhbWUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWluLXdpZHRoOiAzNjBweDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBoZWlnaHQ6IDkydmg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgbWF4LWhlaWdodDogNzIwcHg7XHJcbiAgYmFja2dyb3VuZDogI0U2RUFFQTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICNmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gIG1heC13aWR0aDogMzQwcHg7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcclxuICBjb2xvcjogI2Y1ZjVmNTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsIHtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgbWluLXdpZHRoOiA1OHB4O1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDI1cHggYXV0bztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzI0NjVhO1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCB7XHJcbiAgaGVpZ2h0OiAyMTBweDtcclxuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZS5leHBhbmRlZCAud3JhcCBwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlLmV4cGFuZGVkIC53cmFwIGkuZXhwYW5kLWJ1dHRvbiB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcclxuICBmaWx0ZXI6IEZsaXBIO1xyXG4gIC1tcy1maWx0ZXI6IFwiRmxpcEhcIjtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGhlaWdodCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgaGVpZ2h0IGVhc2U7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgfVxyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmbG9hdDogbGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGJvcmRlciBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYm9yZGVyIGVhc2U7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpbWcub25saW5lIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmVjYzcxO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5hd2F5IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjFjNDBmO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5idXN5IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIGltZy5vZmZsaW5lIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOTVhNWE2O1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwIHAge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCBpLmV4cGFuZC1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjNDM1ZjdhO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgaS5leHBhbmQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW46IDcwcHggMCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMge1xyXG4gICAgd2lkdGg6IDU4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1N3B4O1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMuYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgbWFyZ2luOiA3NXB4IDAgMCAwO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zLmFjdGl2ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MnB4O1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnM6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM0MzVmN2E7XHJcbiAgbWFyZ2luOiAtOHB4IDAgMCAyNHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjNweDtcclxuICB9XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkge1xyXG4gIHBhZGRpbmc6IDE1cHggMCAzMHB4IDE4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAzNXB4IDIycHg7XHJcbiAgfVxyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzQ5Njg4NjtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDVweCAwIDAgMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIG1hcmdpbjogLTNweCAwIDAgLTNweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjc3RhdHVzLW9wdGlvbnMgdWwgbGkgcCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpIHAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vbmxpbmUgc3Bhbi5zdGF0dXMtY2lyY2xlIHtcclxuICBiYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb25saW5lLmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmVjYzcxO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYXdheSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQ6ICNmMWM0MGY7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1hd2F5LmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFjNDBmO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtYnVzeSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQ6ICNlNzRjM2M7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1idXN5LmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTc0YzNjO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNzdGF0dXMtb3B0aW9ucyB1bCBsaSNzdGF0dXMtb2ZmbGluZSBzcGFuLnN0YXR1cy1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQ6ICM5NWE1YTY7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI3N0YXR1cy1vcHRpb25zIHVsIGxpI3N0YXR1cy1vZmZsaW5lLmFjdGl2ZSBzcGFuLnN0YXR1cy1jaXJjbGU6YmVmb3JlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTVhNWE2O1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNwcm9maWxlIC53cmFwICNleHBhbmRlZCB7XHJcbiAgcGFkZGluZzogMTAwcHggMCAwIDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjcHJvZmlsZSAud3JhcCAjZXhwYW5kZWQgbGFiZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1hcmdpbjogMCA4cHggNXB4IDA7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGNvbG9yOiAjZjVmNWY1O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNDNweCk7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3Byb2ZpbGUgLndyYXAgI2V4cGFuZGVkIGlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMjQ2NWE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMjQ2NWE7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2gge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogMTBweCAwIDAgMjBweDtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMTBweCAwIDEwcHggNDZweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI3NlYXJjaCBpbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNzZWFyY2ggaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2Y1ZjVmNTtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjc2VhcmNoIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNzdweCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE0OXB4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMuZXhwYW5kZWQge1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzM0cHgpO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0czo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzMTQwO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTBweCAwIDE1cHggMDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IHtcclxuICAgIHBhZGRpbmc6IDZweCAwIDQ2cHggOHB4O1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzMyNDY1YTtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzQzNWY3YTtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdC5hY3RpdmUgc3Bhbi5jb250YWN0LXN0YXR1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzMyNDY1YSAhaW1wb3J0YW50O1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHtcclxuICB3aWR0aDogODglO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IC0ycHggMCAwIC0ycHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmMzZTUwO1xyXG4gIGJhY2tncm91bmQ6ICM5NWE1YTY7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5vbmxpbmUge1xyXG4gIGJhY2tncm91bmQ6ICMyZWNjNzE7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgc3Bhbi5hd2F5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjFjNDBmO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIHNwYW4uYnVzeSB7XHJcbiAgYmFja2dyb3VuZDogI2U3NGMzYztcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNjb250YWN0cyB1bCBsaS5jb250YWN0IC53cmFwIC5tZXRhIHtcclxuICBwYWRkaW5nOiA1cHggMCAwIDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAjZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjY29udGFjdHMgdWwgbGkuY29udGFjdCAud3JhcCAubWV0YSAucHJldmlldyB7XHJcbiAgbWFyZ2luOiA1cHggMCAwIDA7XHJcbiAgcGFkZGluZzogMCAwIDFweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAtbW96LXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IDFzIGFsbCBlYXNlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2U7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI2NvbnRhY3RzIHVsIGxpLmNvbnRhY3QgLndyYXAgLm1ldGEgLnByZXZpZXcgc3BhbiB7XHJcbiAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwIDJweCAwIDA7XHJcbiAgbWFyZ2luOiAwIDAgMCAxcHg7XHJcbiAgb3BhY2l0eTogLjU7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDA7XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZDogIzMyNDY1YTtcclxuICBjb2xvcjogI2Y1ZjVmNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsICBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgfVxyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jZnJhbWUgI3NpZGVwYW5lbCAjYm90dG9tLWJhciBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMmMzZTUwO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcclxuICB9XHJcbn1cclxuI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNDM1ZjdhO1xyXG59XHJcbiNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAjc2lkZXBhbmVsICNib3R0b20tYmFyIGJ1dHRvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNXB4KSB7XHJcbiAgI2ZyYW1lICNzaWRlcGFuZWwgI2JvdHRvbS1iYXIgYnV0dG9uIHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAjZnJhbWUgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU4cHgpO1xyXG4gICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICNmcmFtZSAuY29udGVudCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzQwcHgpO1xyXG4gIH1cclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgaW1nIHtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiA5cHggMTJweCAwIDlweDtcclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSBwIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLmNvbnRhY3QtcHJvZmlsZSAuc29jaWFsLW1lZGlhIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpIHtcclxuICBtYXJnaW4tbGVmdDogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5jb250YWN0LXByb2ZpbGUgLnNvY2lhbC1tZWRpYSBpOmhvdmVyIHtcclxuICBjb2xvcjogIzQzNWY3YTtcclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gOTNweCk7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gOTNweCk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMge1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTA1cHgpO1xyXG4gIH1cclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjbGVhcjogYm90aDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDE1cHggMTVweCA1cHggMTVweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkuc2VudCBpbWcge1xyXG4gIG1hcmdpbjogNnB4IDhweCAwIDA7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50IHAge1xyXG4gIGJhY2tncm91bmQ6ICM0MzVmN2E7XHJcbiAgY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIGltZyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogNnB4IDAgMCA4cHg7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIHAge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgaW1nIHtcclxuICB3aWR0aDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDVweDtcclxuICBsaW5lLWhlaWdodDogMTMwJTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgcCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJwcm94aW1hLW5vdmFcIiwgIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcclxuICBwYWRkaW5nOiAxMXB4IDMycHggMTBweCA4cHg7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBjb2xvcjogIzMyNDY1YTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xyXG4gICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHggMTZweCA4cHg7XHJcbiAgfVxyXG59XHJcbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgLmF0dGFjaG1lbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNjBweDtcclxuICB6LWluZGV4OiA0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBjb2xvcjogIzQzNWY3YTtcclxuICBvcGFjaXR5OiAuNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgLmF0dGFjaG1lbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIHJpZ2h0OiA2NXB4O1xyXG4gIH1cclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgLmF0dGFjaG1lbnQ6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogNTBweDtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzMjQ2NWE7XHJcbiAgY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuICAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICB9XHJcbn1cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzQzNWY3YTtcclxufVxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5pcy1vbmxpbmV7XHJcbiAgY29sb3I6IGxhd25ncmVlbjtcclxufVxyXG4uaXMtb2ZmbGluZXtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
        this.users = [];
        this.contact = {
            name: '',
            img: '',
            uid: ''
        };
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.loadUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.messageText === '') {
            return;
        }
        var message = {
            name: this._chatService.user.displayName,
            message: this.messageText,
            date: new Date().getTime(),
            uid: this._chatService.user.uid,
            img: this._chatService.user.photoURL,
            contactUid: this.contact.uid
        };
        this._chatService.sendMessage(message)
            .then(function () {
            _this.messageText = '';
            console.log('mensaje enviado correctamente');
        })
            .catch(function (reason) {
            console.log(reason);
        });
    };
    ChatComponent.prototype.getContactData = function (myUid, contact) {
        var _this = this;
        this.contact = contact;
        this._chatService.loadMessages(myUid, contact.uid).subscribe(function (messagesData) {
            _this.chats = messagesData;
            _this.element = document.getElementById('app-mensajes');
            if (_this.element != null) {
                _this.element.scrollTop = _this.element.scrollHeight;
            }
        });
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/components/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-logout {\r\n  margin: 4px;\r\n  margin-left:83%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tbG9nb3V0IHtcclxuICBtYXJnaW46IDRweDtcclxuICBtYXJnaW4tbGVmdDo4MyU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_chatService.afAuth.user | async as user; else showLogin\" xmlns:fb=\"\">\n  <button class=\"btn btn-outline-warning margin-logout\" (click)=\"logout()\" >Logout</button>\n</div>\n\n<ng-template #showLogin style=\"margin-left: 40%\">\n  <p>Please login.</p>\n  <button (click)=\"login()\" class=\"btn btn-outline-success\">Login desd facebook</button>\n</ng-template>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_chatService) {
        this._chatService = _chatService;
    }
    LoginComponent.prototype.login = function () {
        this._chatService.login();
    };
    LoginComponent.prototype.logout = function () {
        this._chatService.logout();
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pipes/no-own-user.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/no-own-user.pipe.ts ***!
  \*******************************************/
/*! exports provided: NoOwnUserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOwnUserPipe", function() { return NoOwnUserPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoOwnUserPipe = /** @class */ (function () {
    function NoOwnUserPipe() {
    }
    NoOwnUserPipe.prototype.transform = function (value, args) {
        return null;
    };
    NoOwnUserPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'noOwnUser'
        })
    ], NoOwnUserPipe);
    return NoOwnUserPipe;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var ChatService = /** @class */ (function () {
    function ChatService(afs, afAuth) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                return;
            }
            _this.user = user;
            _this.loadUsers().subscribe(function (usersList) {
                var index = usersList.map(function (e) { return e.uid; }).indexOf(user.uid);
                if (index == -1) {
                    _this.newUserOnline(user).then(function (reponse) {
                        console.log('new user online');
                    });
                }
            });
        });
    }
    ChatService.prototype.loadUsers = function () {
        this.usersCollecton = this.afs.collection('users', function (ref) {
            return ref.orderBy('uid', 'desc');
        });
        return this.usersCollecton.valueChanges();
    };
    ChatService.prototype.loadMessages = function (myUid, contactUid) {
        this.itemsCollection = this.afs.collection('chats', function (ref) {
            return ref.orderBy('date', 'desc').limit(10);
        });
        return this.itemsCollection.valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var mesages = [];
            for (var i = 0; i <= data.length - 1; i++) {
                if ((data[i].uid == myUid || data[i].uid == contactUid) && (data[i].contactUid == myUid || data[i].contactUid == contactUid)) {
                    mesages.push(data[i]);
                }
            }
            return mesages.reverse();
        }));
    };
    ChatService.prototype.newUserOnline = function (user) {
        var localUser = {
            name: user.displayName,
            uid: user.uid,
            img: user.photoURL,
            isOnline: true
        };
        var test = this.usersCollecton.get();
        return this.usersCollecton.add(localUser);
    };
    ChatService.prototype.sendMessage = function (message) {
        return this.itemsCollection.add(message);
    };
    ChatService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider());
    };
    ChatService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut();
        this.usersCollecton.get().forEach(function (item) {
            return item.docs.map(function (m) {
                return _this.afAuth;
            });
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyCc-Iq-ctmEoVcQbMvOvGQbh1HQdy1V1so',
        authDomain: 'firechat-1cf53.firebaseapp.com',
        databaseURL: 'https://firechat-1cf53.firebaseio.com',
        projectId: 'firechat-1cf53',
        storageBucket: 'firechat-1cf53.appspot.com',
        messagingSenderId: '203864583075'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Cursos\FirechatV1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map