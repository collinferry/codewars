function score(dice) {

  var score = 0, count = 1, set = 0, prev;
  var triple = [0, 1000, 200, 300, 400, 500, 600];

  dice.sort();

  for (var a = 0; a < dice.length; a++) {
    if (dice[a] !== prev) { count = 1; } else { count++; }
    if (count === 3) {
      set = dice[a];
      for (var x = 1; x <= 3; x++) {
        var index = dice.indexOf(set);
        dice.splice(index, 1);
      }
    }
    prev = dice[a];
  }

  score += triple[set];

  for (var b = 0; b < dice.length; b++) {
    if (dice[b] === 1) {score += 100;}
    if (dice[b] === 5) {score += 50;}
  }

  return score;

}
