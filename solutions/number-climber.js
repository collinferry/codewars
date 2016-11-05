function climb(n){
  var myArray = [n];
  var temp = n;
  while (myArray[0] !== 1) {
    myArray.unshift(Math.floor(temp/2));
    temp = myArray[0];
  }
  return myArray;
}
