"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rand = void 0;

var rand = function rand(s, e) {
  return s + Math.floor((e - s + 1) * Math.random());
};

exports.rand = rand;