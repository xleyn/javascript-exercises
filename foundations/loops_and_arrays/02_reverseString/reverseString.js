const reverseString = function (str) {
  reverse = "";
  for (let i = -1; -i <= str.length; i--) {
    console.log(i);
    reverse += str.at(i);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
