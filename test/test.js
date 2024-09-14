let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(`removing ${arr[i]}`);
    arr.splice(i, 1);
  } else {
    console.log(`keeping ${arr[i]}`);
  }
}
