var moveZeros = function (arr) {
var zeros = [];

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] === 0) {
      zeros.push(a);
	 }
  }

  if (zeros.length > 0) {
    for (var c = zeros.length - 1; c >= 0; c--) {
      arr.splice(zeros[c], 1);
    }
    for (var b = 1; b <= zeros.length; b++) {
      arr.push(0);
    }
  }

  return arr;

};
