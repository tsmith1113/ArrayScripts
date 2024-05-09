"use strict";

function compareAscendingNumber(a,b){
    if(a < b){
        return -1;
    }else if(a == b){
        return 0;
    }else{
        return 1;
    }
}

let students = ["100","52","11","8300", "nathan", "Natalie", "Brittany", "Zachary", "Tracie", "Julian", "Adama", "Yoseph", "Monse", "Ian", "Zana"];

let numbers = [3, 27, 400, 1 ,111, 5];


console.log("BEFORE");
console.log(students);

students.sort();

console.log();
console.log("AFTER");
console.log(students);

console.log();
console.log("BEFORE");
console.log(numbers);

numbers.sort(compareAscendingNumber);

console.log();
console.log("AFTER");
console.log(numbers);