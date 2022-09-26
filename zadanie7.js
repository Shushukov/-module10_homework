let arr = [1, 2, 3, 5, 10, 0.2, 0, null];
let zero = 0;
let number = 0;
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" || !isNaN(arr[i])) {
    number += 1;
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
}
console.log(
  `В массиве: ${number} цифр, ${zero} нулей, ${even} чётных, ${odd} нечётных`
);
