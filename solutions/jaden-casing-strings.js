String.prototype.toJadenCase = function () {
  var jadenArray = this.split('');
  jadenArray[0] = jadenArray[0].toUpperCase();
  for (var a = 0; a <= jadenArray.length; a++) {
    if (jadenArray[a] === ' ') { jadenArray[a+1] = jadenArray[a+1].toUpperCase(); }
  }
  return jadenArray.join('');
};
