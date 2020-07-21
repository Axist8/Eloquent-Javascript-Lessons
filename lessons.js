// 2.1 Looping a triangle
let mark = "#";
for (let i = 0 ; i < 7 ; i++){
  console.log(mark);
  mark = mark + "#";
}
// 2.2 FizzBuzz
for (let i = 1 ; i < 101 ; i++){
    if (i % 15 == 0){
      console.log("FizzBuzz");
    } else if (i % 5 == 0){
      console.log("Buzz");
    } else if (i % 3 == 0){
      console.log("Fizz");
    } else {console.log(i);}
  }

// 2.3 Chessboard


// 4.1 Sum of a range
function range(start, end, step){
  let rangeArray = [];
  if (step == undefined) step = 1;
  let numLoops = Math.abs(Math.floor((start - end) / step));
  for (let i = 0 ; i <= numLoops ; i++){
    rangeArray.push(start);
    start = start + step;
  }
  return rangeArray;
}

console.log(range(5, 2, -1));