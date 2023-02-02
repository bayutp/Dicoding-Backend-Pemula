const moment = require("moment");
const _ = require("lodash");

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

sayHello("John");

// format tanggal menggunakan moment js
const date = moment().format("Do MMMM YYYY, h:mm:ss a");
console.log(date);

// menggunakan lodash
const myOddEvenArray = _.partition(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  (n) => n % 2 === 0
);
console.log(myOddEvenArray);
