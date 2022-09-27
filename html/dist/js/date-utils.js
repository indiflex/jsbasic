"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendar = exports.WEEKS = void 0;

var calendar = function calendar(year, month) {
  var dt = new Date(year, month - 1, 1);
  var week = dt.getDay();
  var days = Array(week).fill(0); // console.log(inputDate, `${dt.getFullYear()}-${dt.getMonth() + 1}`);

  while (dt.getMonth() === month - 1) {
    // console.log(dt);
    days.push(dt.getDate());
    dt.setDate(dt.getDate() + 1);
  }

  console.log("".concat('\t'.repeat(2), "     ").concat(year, "-").concat(month));
  console.log('');
  console.log('일월화수목금토'.split('').map(function (w) {
    return "".concat(w, "\t");
  }).join(''));
  console.log(days.map(function (d, i) {
    var delim = (i + 1) % 7 === 0 ? '\n' : '\t';
    d = d === 0 ? '' : d < 10 ? " ".concat(d) : d;
    return "".concat(d).concat(delim);
  }).join(''));
};

exports.calendar = calendar;
var WEEKS = ['일', '월', '화', '수', '목', '금', '토'];
exports.WEEKS = WEEKS;