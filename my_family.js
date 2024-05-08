"use strict";

let kids = ["Michelle", "Tracie", "Kemi", "Kiayni", "Joshua"];


displayKids(kids);


// let i = 0
// let totalKids = kids.length;
// // while(i < totalKids){
// //     console.log(i + " " +kids[i]);
// //     i++;
// // }



function displayKids(kidArray){
    let totalKids = kidArray.length;
    for(let i = 0; i < totalKids; i++){
    console.log(i + " " +kids[i]); 
}
}