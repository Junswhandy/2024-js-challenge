//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return -Math.abs(num);
  }
}
let tes = makeNegative(-1);
console.log(tes);

tes = makeNegative(0);
console.log(tes);

tes = makeNegative(-1);
console.log(tes);
