const findTheOldest = function (arr) {
  arr.sort((a, b) => {
    aYOD = a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear();
    bYOD = b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear();

    aAge = aYOD - a.yearOfBirth;
    bAge = bYOD - b.yearOfBirth;
    return bAge - aAge;
  });
  return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
