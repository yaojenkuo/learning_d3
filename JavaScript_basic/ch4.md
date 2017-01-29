# Functions

## a `max()` function

```js
function max(a, b) {
  if (a > b)
    return a;
  else
    return b;
}

m = max(9, 5);
console.log("max(9, 5) = " + m);
```

## a `sum()` function

```js
function sum(n) {
  var s = 0;
  for (i = 1; i <= n; i ++) {
    s += i;
  }
  return s;
}

my_sum = sum(10);
console.log("1 + ... + 10 = " + my_sum);
```

## a `isPrime()` function

```js
function isPrime(n) {
  for (var i = 2; i < n; i ++) {
    if (n%i === 0)
      return false;
  }
  return true;
}

console.log(""isPrime(33)="+isPrime(33)") // false
console.log(""isPrime(17)="+isPrime(17)") // true
```

## 2 Types of Function Declaration

```js
// first type
function sub(a, b) {
  return a - b;
}

// second type
var add = function(a, b) {
  return a+b;
}

// function calls
console.log("add(3, 5)=", add(3, 5), " sub(7, 2)=", sub(7, 2));
```

## Function as Arguments

```js
function sub(a, b) {
  return a - b;
}

function returnFunction(f, a) {
  return f(a, 5);
}

// function call
console.log(returnFunction(sub, 8)) // sub(8, 5) == 3
```

## Function Mapping

```js
function map(f, a) {
  var ma = [];
  for (var i in a) {
    ma.push(f(a[i]));
  }
  return ma;
}

function square(x) {
  return x * x;
}

console.log(map(square, [3, 1, 5, 4, 2]))
```

## Callback

```js

```