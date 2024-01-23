//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let result = evenOrOdd(1);
console.log(result);

result = evenOrOdd(2);
console.log(result);
