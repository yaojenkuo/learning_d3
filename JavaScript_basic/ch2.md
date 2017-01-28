# If and Loops

## If

```js
var score = 61;

if (score > = 60)
    console.log("Passed!");
else
    console.log("Failed!");
```

## While Loop

```js
var iterator = 1;

while (iterator <= 10) {
    console.log("iterator = ", iterator);
    iterator += 1;
}
```

```js
var sum = 0;
var i = 1;

while (i <= 10) {
    sum += i;
    console.log("i = ", i, "sum = ", sum);
    i += 1;
}
```

## For Loop

```js
for (i = 1; i <= 10; i ++) {
    console.log("i = ", i);
}
```

```js
var sum = 0;
for (i = 1; i <= 10; i ++) {
    sum += i;
    console.log("i = ", i, " sum = ", sum);
}
```

### For with break

```js
for (i = 1; i <= 10; i ++) {
    if (i == 4) break;
    console.log("i = ", i);
}
```

### For with continue

```js
for (i = 1; i <= 10; i ++) {
    if (i == 4) continue;
    console.log("i = ", i);
}
```