"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepCopy = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var copyArrayOrObject = function copyArrayOrObject(arrobj) {
  var copyObj = Array.isArray(arrobj) ? [] : {};

  for (var k in arrobj) {
    var tmpObj = arrobj[k];
    console.log(k, tmpObj, _typeof(tmpObj));
    if (_typeof(tmpObj) === 'object') copyObj[k] = copyArrayOrObject(tmpObj);else copyObj[k] = arrobj[k];
  }

  return copyObj;
};

exports.deepCopy = copyArrayOrObject;