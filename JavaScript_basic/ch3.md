# Arrays and Strings

## Arrays

```js
a = [0, 1, 2]
a[0] // 0
a[1] // 1
a[2] // 2
a[3] // undefined
a[0] = 7
a // [7, 1, 2]
```

## Methods on array

```js
a = [1, 2, 3]
a.push(4)
a // [1, 2, 3, 4]
b = a.concat([5, 6, 7])
b // [1, 2, 3, 4, 5, 6, 7]
a // [1, 2, 3, 4]
a.join() // "1,2,3,4"
a.join(":") // "1:2:3:4"
a.pop() // 4
a.reverse() // [3, 2, 1]
a.sort() // [1, 2, 3]
a.slice(0, 2) // [1, 2]
```

## For loop with arrays

```js
var a=[1, 6, 2, 5, 3, 6, 1];

for (i=0;i<a.length;i++) {
  console.log("a[%d]=%d", i, a[i]);
}
```

```js
var a=[1, 6, 2, 5, 3, 6, 1];

for (i in a) {
  console.log("a[%d]=%d", i, a[i]);
}
```

## Strings

```js
my_str = "Hello"
my_str.length // 5
my_str[0] // 'H'
my_str += " world"
my_str
```

## String manipulation

```js
my_str = "012345"
my_str.substr(1, 2) // '12'
my_str.substring(1, 3) // '12'
```

```js
my_str = 'heLLo'
my_str.toUpperCase() // 'HELLO'
my_str.toLowerCase() // 'hello'
my_str = '  heLLo  '
my_str.trim() // 'heLLo'
my_str.concat(' world')
my_str.charAt(0) // 'h'
```