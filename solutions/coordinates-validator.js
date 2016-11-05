function isValidCoordinates(coordinates){

  var lat = 0;
  var long = 0;
  var split = coordinates.indexOf(", ");

  // Rule out exponents that would slide past the NaN check

  if (coordinates.indexOf("e") > 0) { return false; }

  // If the format is correct (including the comma & space), split the coords into absolute value of lat and long

  if (split > 0) {
    lat = Math.abs(coordinates.slice(0, split));
    long = Math.abs(coordinates.slice(split + 2));
  } else { return false; }

  // Check for non-integers

  if (isNaN(lat) || isNaN(long)) { return false; }

  // Confirm correct ranges

  if ((lat < 0 || lat > 90) || (long < 0 || long > 180)) { return false; }

  // If all tests passed, return true!

  return true;
}
