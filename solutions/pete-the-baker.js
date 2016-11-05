function cakes(recipe, available) {

  var ingredients = Object.keys(recipe).length;
  var cakes;

  for (var a = 0; a < ingredients; a++) {

    var item = Object.keys(recipe)[a];

    if (available[item]) {

      var num = Math.floor(available[item] / recipe[item]);
      if (num < cakes || cakes === undefined) {
      	console.log("I can make "+num+" cakes with "+item);
      	cakes = num;
      }
    } else {
	      return 0;
      }
}
return cakes;
}
