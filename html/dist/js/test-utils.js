"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertArray = void 0;

var eqArray = function eqArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (var i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

var assertArray = function assertArray(arr1, arr2) {
  if (eqArray(arr1, arr2)) console.log(arr1);else console.log(arr1, arr2, '==>', '불통!!');
};

exports.assertArray = assertArray;