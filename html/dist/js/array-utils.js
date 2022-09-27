"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "assertEqual", {
  enumerable: true,
  get: function get() {
    return _testUtils.assertArray;
  }
});
exports.range = void 0;

var _testUtils = require("./test-utils.js");

var range = function range(start, end, step) {
  var _end, _step;

  if (start !== end && (end - start) * step < 0) return [];
  var tmp = start;
  end = (_end = end) !== null && _end !== void 0 ? _end : start >= 0 ? (start = start > 0 ? 1 : 0, tmp) : -1;
  step = (_step = step) !== null && _step !== void 0 ? _step : start >= end ? -1 : 1;
  var result = [start];

  var until = function until(x) {
    return step !== 0 && start !== end && (start > end ? x >= end : x <= end);
  };

  for (var i = start + step; until(i); i += step) {
    result.push(i);
  }

  return result;
};

exports.range = range;