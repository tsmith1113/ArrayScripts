"use strict";

let myScores = [92,98,84,76,89,99,100];
let yourScores = [82,98,94,88,92,100,100];


function getAverage(){
    let sum = 0;
    for(let i = 0; i < myScores.length; i++){
        sum += myScores[i];
    }
    return sum / myScores.length;
}

let average = getAverage(myScores)
console.log("The avergae is ", average.toFixed(2))