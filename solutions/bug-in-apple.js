function sc(apple){

  for (var a = 0; a < apple.length; a++) {
    var subApple = apple[a];
    for (var b = 0; b < subApple.length; b++) {
      if (subApple[b] == 'B') { return [a, b]; }
    }
  }
}
