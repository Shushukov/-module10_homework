let x = prompt("Введите число");
x = +x;
alert("Введеное значение преобразовано в " + typeof x);

if (x % 2 === 0) {
  alert("число четное");
} else if (x % 1 === 0) {
  alert("число нечетное");
} else {
  alert("Упс, кажется вы ошиблись");
}

if (x !== x) {
  alert("это NaN");
} else {
  alert("это не NaN");
}
