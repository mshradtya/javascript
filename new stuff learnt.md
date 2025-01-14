
- `Ojbect.key()` to get the keys of an object

---
 
 - use `Array.from()` to create an array from an _iterable_ or _array-like_ object
- use `for...of` to loop over an iterable.

---
### my code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
  </head>
  <body>
    <script>
      function sumAll(...nums) {
        let sum = 0;
        nums.forEach((num) => {
          if (typeof num === "number") sum = sum + num;
        });
        return sum;
      }

      // Example usage:
      console.log(sumAll(1, 2, 3)); // 6
      console.log(sumAll(10, 20, 30, 40)); // 100
      console.log(sumAll("hello", "world")); // 0
    </script>
  </body>
</html>
```

### optimized code

- use `reduce()` instead of `forEach`, as we're reducing all values into one.
- use `Number.isFinite()` instead of `num typeof 'number'`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Sum All</title>
  </head>
  <body>
    <script>
      function sumAll(...nums) {
        return nums.reduce((sum, num) => 
          Number.isFinite(num) ? sum + num : sum, 0
        );
      }

      // Example usage:
      console.log(sumAll(1, 2, 3)); // 6
      console.log(sumAll(10, 20, 30, 40)); // 100
      console.log(sumAll("hello", "world")); // 0
      console.log(sumAll(5, "test", 10, NaN, Infinity, -3)); // 12 (ignores NaN & Infinity)
    </script>
  </body>
</html>
```


---
- `++counter` = increment before returning
- `counter++` = return and increment

---

- `.map()` is used to create a new array but is **not** ideal for finding elements. Use `.find()` instead.

---

- always try to create an object if look up is the motive
- Instead of an **array of objects**, a **JavaScript object (dictionary)** provides **O(1)** lookup time instead of **O(n)**.

---

```js
memoizedSum.cache ??= {}
```

the above is better than

```js
if (memoizedSum.cache === undefined) { 
	memoizedSum.cache = {}; 
}
```

which is better than 

```js
// this could be problematic when the if statment contains a number like 0
if (!memoizedSum.cache) {
	memoizedSum.cache = {}
}
```

