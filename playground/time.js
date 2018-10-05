// Jan 1st 1970 00:00:00 am
var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var date = moment();
console.log(date.format('h:mm a'));

new Date().getTime();
var someTimestamp = moment().valueOf();
var createdAt = 1234;
var date = moment(createdAt);
