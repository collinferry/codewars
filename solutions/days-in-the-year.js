function yearDays(year) {

  var leap = "";

  if ((Math.abs(year) % 4 === 0) && (Math.abs(year) % 100 !== 0)) {
   leap = year + " has 366 days";
  } else if ((year === 0) || (Math.abs(year) % 400 === 0)) {
   leap = year + " has 366 days";
  }
  else {
   leap = year + " has 365 days";
   }

   return leap;

}
