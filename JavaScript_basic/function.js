var square = function (x) {
    return x ** 2;
};

console.log(square(12));

var makeNoise = function () {
    return "Phoebe!";
};

console.log(makeNoise());

var power = function (base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count ++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));