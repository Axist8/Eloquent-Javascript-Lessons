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