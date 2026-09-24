const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((tot, cur) => tot + cur, 0);
};

const multiply = function (arr) {
  return arr.reduce((tot, cur) => tot * cur);
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (a) {
  if (a === 0) return 1;

  tot = 1;
  for (let i = a; i >= 2; i--) {
    tot *= i;
  }
  return tot;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
