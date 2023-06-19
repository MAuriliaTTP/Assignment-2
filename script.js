//Question 1
function myEach(arr, test1) {
    for (let i = 0; i < arr.length; i++) {
      test1(arr[i], i, arr);
    }
  }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function double(num) {
  console.log(num * 2);
}
myEach(numbers, double);

//Question 2
function myMap(arr, test2) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArray[i] = test2(arr[i], i, arr);
    }
    return mappedArray;
  }

const nums = [1, 2, 3, 4, 5];
function addTwo(num) {
    return num + 2;
}
  
const plusTwoNumbers = myMap(nums, addTwo);
console.log(plusTwoNumbers);

//Question 3

function myFilter(arr, callback) {
    const filteredArray = [];
    let filteredIndex = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArray[filteredIndex] = arr[i];
        filteredIndex++;
      }
    }
  
    return filteredArray;
  }

  const a = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];

function isEven(num) {
  return num % 2 === 0;
}

const evenNumbers = myFilter(a, isEven);
console.log(evenNumbers);

//Question 4

function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

const b = [2, 4, 6, 7];

function isOdd(num) {
  return num % 2 === 1;
}

const hasEvenNumber = mySome(b, isOdd);
console.log(hasEvenNumber);

//Question 5

function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

const c = [1, 2, 4, 6, 8, 10];
const allEvenNumbers = myEvery(c, isEven);
console.log(allEvenNumbers);

//Question 6

function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];

  for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

const d = [3, 4, 5];

function sum(acc, num) {
  return acc + num;
}

const total = myReduce(d, sum, 0);
console.log(total);

//Question 7

function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

const e = [1, 2, 3, 4, 5];
const includesTen = myIncludes(e, 10);
console.log(includesTen); 

//Question 8

function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const f = [1, 2, 3, 4, 5];
const indexThree = myIndexOf(numbers, 3);
console.log(indexThree);

//Question 9

function myPush(arr, elementToAdd) {
  arr[arr.length] = elementToAdd;
  return arr.length;
}

const g = [1, 2, 3, 4];
const newLength = myPush(g, 5);
console.log(g); 
console.log(newLength); 

//Question 10

function myLastIndexOf(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const h = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const lastIndexThree = myLastIndexOf(h, 3);
console.log(lastIndexThree);

//Question 11

Object.grabKeys = function(obj) {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys[keys.length] = key;
    }
  }
  return keys;
};

const person = {
  name: "Justin",
  age: 40,
  city: "New York"
};

const keys = Object.grabKeys(person);
console.log(keys);

//Question 12

Object.grabValues = function(obj) {
  const values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values[values.length] = obj[key];
    }
  }
  return values;
};

const otherPerson = {
  name: "Max",
  age: 39,
  city: "New York"
};

const values = Object.grabValues(otherPerson);
console.log(values);

//Question 13

function range(start, end, step = 1) {
  const result = [];
  if (step === 0) {
    throw new Error("Step value cannot be zero.");
  } else if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(j) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

const j = range(1, 10);
const totals = sum(j);
console.log(j); 
console.log(totals);
const numbersWithStep = range(1, 10, 2);
const numbersWithNegativeStep = range(5, 2, -1);
console.log(numbersWithStep);
console.log(numbersWithNegativeStep);

//Question 14

function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  const length = array.length;
  const lastIndex = length - 1;
  const middleIndex = Math.floor(length / 2);
  for (let i = 0; i < middleIndex; i++) {
    const temp = array[i];
    array[i] = array[lastIndex - i];
    array[lastIndex - i] = temp;
  }
  return array;
}

const arr = [1, 2, 3, 4, 5];
const reversedArr = reverseArray(arr);
const reversedInPlaceArr = reverseArrayInPlace(arr.slice());
console.log(reversedArr); 
console.log(reversedInPlaceArr); 

//Question 15

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  const array = [];
  let current = list;
  while (current) {
    array.push(current.value);
    current = current.rest;
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, position) {
  let current = list;
  for (let i = 0; i < position; i++) {
    if (!current) return undefined;
    current = current.rest;
  }
  return current ? current.value : undefined;
}

function recursiveNth(list, position) {
  if (!list) return undefined;
  if (position === 0) return list.value;
  return recursiveNth(list.rest, position - 1);
}

const arrays = [1, 2, 3];
const list = arrayToList(arrays);
const arrayFromList = listToArray(list);
const newList = prepend(0, list);
const nthElement = nth(list, 1);
const recursiveNthElement = recursiveNth(list, 2);

console.log(list); 
console.log(arrayFromList); 
console.log(newList); 
console.log(nthElement); 
console.log(recursiveNthElement); 

//Question 16

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };
console.log(deepEqual(obj1, obj2)); 
console.log(deepEqual(obj1, obj3)); 

//Question 17

function moveZeros(nums) {
  let nonZeroIndex = 0; 

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

const k = [0, 1, 0, 3, 12];
console.log(moveZeros(k)); 