var nbrOfLaps = function (x, y) {

// find greatest common denominator

function gcd(x, y) {
    if (y) {
        return gcd(y, x % y);
    } else {
        return Math.abs(x);
    }
}

var denom = gcd(x, y);

// divide the inputs by the GCD

x = x / denom;
y = y / denom;

// multiply x and y together, then divide them each by that result to get the number of laps for each runner

var combo = x * y;
x = combo / x;
y = combo / y;

return [x, y];

}
