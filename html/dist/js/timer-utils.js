"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = exports.debounce = void 0;

var debounce = function debounce(cb, delay) {
  var timer;
  return function () {
    if (timer) clearTimeout(timer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    timer = setTimeout.apply(void 0, [cb, delay].concat(args));
  };
};

exports.debounce = debounce;

var throttle = function throttle(cb, delay) {
  var timer;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (timer) return;
    timer = setTimeout(function () {
      cb.apply(void 0, args);
      timer = null;
    }, delay);
  };
};

exports.throttle = throttle;