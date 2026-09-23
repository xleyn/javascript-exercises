const removeFromArray = function (arr, ...toRemove) {
  for (elem of toRemove) {
    let idxToRemove = arr.indexOf(elem);
    while (idxToRemove !== -1) {
      arr.splice(idxToRemove, 1);
      idxToRemove = arr.indexOf(elem);
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
