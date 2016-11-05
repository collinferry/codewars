function triangleType(a, b, c){

var sides = [a, b, c];
sides.sort(function(a, b){return a-b});

if ((sides[0] + sides[1]) <= sides[2]) { return 0; }
if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) > Math.pow(sides[2], 2)) { return 1; }
if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) == Math.pow(sides[2], 2)) { return 2; }
if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2)) { return 3; }

}
