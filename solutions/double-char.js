function doubleChar(str) {
  var broken = str.split("");
  var double = [];
  for (var a = 0; a < str.length; a++) {
    double.push(broken[a]);
    double.push(broken[a]);
  }
  var final = double.join("");
  return final;

}
