"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    
    

        function getlunch(order){
            let ordersubTotal = 0;
            for(let i = 0; i <order.length; i++){
                ordersubTotal += order[i].price;
            }
            return ordersubTotal;
        }

        let ordersubTotal = getlunch(lunch);
        let taxrate = ordersubTotal * 0.08;
        let tipAmount = ordersubTotal * .18;
        let totaldue = ordersubTotal + taxrate + tipAmount;






        console.log("My meal cost "+totaldue.toFixed(2));
