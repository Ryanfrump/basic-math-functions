const add = function (number1, number2) {
  let total = number1 + number2;
  return total;
};
const multiply = function (number1, number2) {
  let total = number1 * number2;
  return total;
};
const square = function (number1) {
  let total = multiply(number1, number1);
  return total;
};
const addSquare = function (number1, number2) {
  let addNumbers = add(number1, number2);
  let numbersSquared = square(addNumbers);
  return numbersSquared;
};
document.getElementById("addButton").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  alert(add(number1, number2));
});
document
  .getElementById("multiplyButton")
  .addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    alert(multiply(number1, number2));
  });
document.getElementById("squareButton").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value);
  alert(square(number1));
});
document
  .getElementById("addSquareButton")
  .addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    alert(addSquare(number1, number2));
  });
