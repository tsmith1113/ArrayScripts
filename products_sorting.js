"use strict";


let thispart = [
    {code: "ABC:1234-M", price: 6.50},
    {code: "XYZ:322-L", price: 8.00},
    {code: "ACME:6-S", price: 4.50}
    
    ];

function getSupplier(a,b) {
    if(a.code < b.code){
        return -1;
    }
   else if(a.code == b.code){
    return 0;
   }
   return 1;  
 }

 for(let i = 0; i < thispart.length; i++){
    console.log(thispart[i].code);
   }
 thispart.sort(getSupplier);

   console.log("--------------------------");
   for(let i = 0; i < thispart.length; i++){
    console.log(thispart[i].code);
   }
 function getPrice(a,b) {
   return b - a;  
 }
 
 thispart.sort(getPrice);

   console.log("--------------------------");
   for(let i = 0; i < thispart.length; i++){
    console.log("$"+thispart[i].price);
   }

   