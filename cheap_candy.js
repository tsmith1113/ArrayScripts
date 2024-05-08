"use strict";

let products = [
    { product: "Gummy Worms", category: "candy", price: 5.79 },
    { product: "Plain M&Ms", category: "candy", price: 2.89 },
    { product: "Peanut M&Ms", category: "candy", price: 2.89 },
    { product: "Swedish Fish", category: "candy", price: 3.79 },
    { product: "Twix", category: "candy", price: 2.79 },
    { product: "Snickers", category: "candy", price: 5.79 },
    { product: "Milk Chocolate", category: "candy", price: 5.79 },
    { product: "Starburts", category: "candy", price: 6.79 },
    { product: "White Chocolate", category: "candy", price: 7.79 },
    { product: "Resse", category: "candy", price: 1.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];

function getProductsItemsInCategory(products, category) {
    let matching = [];
    let numItems = products.length;
    for (let i = 0; i < numItems; i++) {
        if (products[i].category == category) {
            matching.push(products[i]);
        }
    }
    return matching;
}

let candy = getProductsItemsInCategory(products, "candy");
let numCandy = candy.length;
for (let i = 0; i < 4.00; i++) {
    console.log(candy[i].product + " price is " + candy[i].price.toFixed(2));
}
console.log("--------------------------------");
    candy = getProductsItemsInCategory(products, "M&Ms");
    let MCandy = M.length;
    for (let i = 0; i < MCandy; i++) {
    console.log(M[i].product + " 2 candies " + M[i].product);
}