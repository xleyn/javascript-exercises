const sumAll = function (min, max) {
  if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }
  if (min > max) {
    [max, min] = [min, max];
  }
  let res = 0;
  for (let i = min; i <= max; i++) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
