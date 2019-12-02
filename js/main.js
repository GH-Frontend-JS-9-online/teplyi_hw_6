'use strict';

let numberArray = [5, 2, 10, 15, 21, 3, 7, -7];

console.log("first task");
console.log("array: " + numberArray);

console.log("sumValue: " + sumValue(numberArray));
console.log("minValue: " + minValue(numberArray));
console.log("maxValue: " + maxValue(numberArray));

let replacedNumberArray = numberArray;
replace(replacedNumberArray);
console.log("after replace: " + replacedNumberArray);


function sumValue (arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function minValue (arr) {
    return Math.min.apply(null, arr);
}

function maxValue (arr) {
    return Math.max.apply(null, arr);
}

function replace (arr) {
    let min = minValue(arr);
    let max = maxValue(arr);
    let minId = arr.indexOf(min);
    let maxId = arr.indexOf(max);
    arr[minId] = max;
    arr[maxId] = min;
}

// second task

console.log("\nsecond task");
func(func2);

function func (callback) {
    callback();
}

function func2 () {
    console.log("Hello, World!");
}

// third task

console.log("\nthird task");
console.log("foobar: " + foobar(numberArray));

function foobar (arr) {
    for(let i = 0; i < arr.length; i++) {
        if(((arr[i] % 3) == 0) && ((arr[i] % 7) == 0)) {
            arr[i] = "foobar";
        } else if((arr[i] % 3) == 0) {
            arr[i] = "foo";
        } else if((arr[i] % 7) == 0) {
            arr[i] = "bar";
        }
    }
    return arr;
}

// fourth task

console.log("\nfourth task")
console.log(arrayTask("kot", "lot"));

function arrayTask (str1, str2) {
    console.log(str1);
    console.log(str2);

    let commonLetters = [];
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            commonLetters.push(arr1[i]);
            arr2[i] = ""; 
        }
    }
    console.log("common letters: " + commonLetters);
    return (commonLetters.length / (str1.length + str2.length)) * 100 + "%"
  }
  