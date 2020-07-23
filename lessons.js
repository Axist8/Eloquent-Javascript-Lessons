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

// Ch. 4 Examples
// 001
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

// 002
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
console.log(tableFor("pizza", JOURNAL));

// 003 
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));

// 004 
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
 // → {x: 0.3667, y: 1.966}

//

// 4.1 Sum of a range
function range(start, end, step){
  let rangeArray = [];
  if (step == undefined) step = 1;
  let loops = Math.abs(Math.floor((start - end) / step));
  for (let i = 0 ; i <= loops ; i++){
    rangeArray.push(start);
    start = start + step;
  }
  return rangeArray;
}
function sum(rang){
  let total = 0;
  for (let i = 0 ; i < rang.length ; i++){
    total = total + rang[i];
  }
  return total;
}

console.log(sum(range(1, 10, 2)));

// 4.2 Reversing an array
function reverseArray(arrayx){
  let arrayz = [];
  for (let i = arrayx.length ; i > 0 ; i--){
    arrayz.push(arrayx[i-1]);
  }
  return arrayz;
}

function reverseArrayInPlace(array){
  let flip = 0;
  for (let i = 0 ; i < (Math.floor(array.length / 2)) ; i++){
    flip = array[i];
    array[i] = array[(array.length - 1) - i];
    array[(array.length - 1) - i] = flip;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// 4.3 A List
function arrayToList(array){
  let list = null;
  for (let i = 0 ; i < array.length ; i++){
    list = {
      value: array[(array.length - 1) - i],
      rest: list
    }
  }
  return list;
}


function listToArray(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    result.push(list.value);
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      list = list.rest;
      if (list.hasOwnProperty('value')) {
      	result.push(list.value);
      }
    }
  }
  return result;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

function nth(list, number){
  return listToArray(list)[number];
}

function nthRecursive(list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nthRecursive(list.rest, number-1);
  }
}

// 4.4 Deep Comparison
function deepEqual(alpha, omega){
  if (alpha === omega){
    return true;
  } else if (typeof alpha === 'object' && alpha !== null && typeof omega === 'object' && omega !== null){
      if (Object.keys(alpha) !== Object.keys(omega)) return false;
    	for (let i = 0 ; i < Object.keys(alpha).length ; i++){
        	if (Object.keys(alpha)[i] !== Object.keys(omega)[i]) return false;
        }
      return true;
  } else {return false;}
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));