//Arrays
//const arr = new Array(); //Only use for define siza array
//console.log(arr);

// const arr = [] //not is a best practice
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)

// console.log(arr);

const arr = [1, 2, 3, 4, 5];
//arr.push(6)
let arr2 = [...arr, 6];
let arr3 = arr2.map(x => x * 2);

console.log(arr);
console.log(arr2);
console.log(arr3);