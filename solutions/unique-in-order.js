function uniqueInOrder(iterable){
  var check = "";
  if (typeof iterable == "string") { iterable = iterable.split(""); }

  for (var a = iterable.length; a >= 0; a--) {
    if (iterable[a] == check) {
      iterable.splice(a, 1);
      check = iterable[a];
    } else { check = iterable[a]; }
  }
  return iterable;
}
