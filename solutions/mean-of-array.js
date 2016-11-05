function getAverage(marks){
  var sum = marks.reduce(function(a, b) { return a + b; }, 0);
  return Math.floor(sum/marks.length);
}
