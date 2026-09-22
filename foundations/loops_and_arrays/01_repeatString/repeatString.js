const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  if (num === 0) return "";

  result = string.slice();

  for (let i = 0; i < num - 1; i++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
