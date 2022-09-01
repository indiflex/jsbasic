const moment = require('moment-timezone');

const today = moment();
console.log(today.format('LLLL'));
console.log(today.format('YYYY-MM-DD'));
const d801 = moment('2022-08-01');
console.log(d801.format('MMM MMMM Do D DD'));

moment.locale('ko');
const d802 = moment('2022-08-02');
console.log(d802.format('LLLL'));
console.log(d802.format('MMM MMMM Do D DD'));

const d0 = new Date(0);
console.log(moment(d0).tz('America/Los_Angeles').format('LLL'));
console.log(moment().format('YYYY-MM-DD HH:mm:ss (dddd)'));
console.log(moment().format('a h:mm'));
console.log(moment().startOf('M'));
console.log(moment().startOf('y'));
console.log(moment().startOf('Q'));
console.log(moment().endOf('Q'));
console.log(moment().diff(moment('1973-10-05'), 'M'));
console.log(moment(new Date(0)).fromNow());
