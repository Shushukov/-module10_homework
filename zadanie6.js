const arr = [1, 1, 1, 2, 3];
const newArr = new Set(arr);
const hasDuplicates = newArr.size < arr.length;
console.log(hasDuplicates);
