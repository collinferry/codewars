function GetSum( a,b ) {

   if (a === b) {

     return a;

   } else {

     var max = Math.max(a, b);
     var min = Math.min(a, b);
     var sum = 0;

     for (var a = min; a <= max; a++) {
       sum += a;
     }

     return sum;

   }
}
