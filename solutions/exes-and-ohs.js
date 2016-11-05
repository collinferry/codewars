function XO(str) {

    var os = str.match(/[oO]/g);
    var xs = str.match(/[xX]/g);

    if (os == null && xs == null) {
      return true;
    } else if (os == null || xs == null) {
      return false;
    } else if (os.length == xs.length) {
      return true;
    } else {
      return false;
    }
}
