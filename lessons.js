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
let size = 8;
for (let ver = 0 ; ver < size ; ver++){
  let board = "";
  for (let hor = 0 ; hor < size ; hor++){
    if ((hor + ver) % 2 == 0){
      board = board + " ";
    }
    else {board = board + "#";}
  }
  console.log(board);
}

// 3.1 Minimum
function min(alpha, omega){
    if (alpha == omega){
      return "why?";
    } else if (alpha > omega){
      return omega;
    } else {return alpha;}
  }
  
  console.log(min(0, 0));

// 3.2 Recursion
function isEven(digit) {
    if (digit == 0) {
      return "true";
    } else if (digit == 1){
      return "false";
    } else if (digit < 0){
      return isEven(digit + 2)
    } else {
      return isEven(digit -2)
    }
  }
  console.log(isEven(-11));

//3.3 Bean Counting
function countBs(wor){
    let Bs = 0;
    for (let i = 0 ; i < wor.length ; i++){
      if (wor[i] === "B") Bs += 1;
    }
    return Bs;
  }
  
  function countChar(word, letter){
    let lettNum = 0;
    for (let i = 0 ; i < word.length ; i++){
      if (word[i] == letter) lettNum += 1;
    }
    return lettNum;
  }
  console.log(countChar("HodgePodge", "o"));

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

// 4.2 