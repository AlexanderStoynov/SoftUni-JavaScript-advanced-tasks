'use strict';

function solve(fruit, weight, price) {
    
    weight = weight/ 1000;

    console.log(`I need $${(price * weight).toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}



