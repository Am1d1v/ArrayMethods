


const japaneseRestaurant = {
    restaurantName: "Banzai",
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', "Sushi", "Vegetarian", "Organic"],
    appetizers: ['Seaweed Salad', "Tempura shrimp", "Sushi rice"],
    mainMenu: ["Sushi", "Ramen", "Temoura"],
    workingHours: {
        wednesday: {
            open: 10,
            close: 23
        },
        friday: {
            open: 10,
            close: 23
        },
        sunday: {
            open: 12,
            close: 23
        }

    },
    orderFood: function(appetizersIndex, mainMenuIndex){
        return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]]
    },
    foodDelivery: function({deliveryTime, appetizersIndex, adress}){
        //console.log(obj);
        console.log(`Your order on the way to you. Will arrived to ${adress} at ${deliveryTime}. Your order is ${this.appetizers[appetizersIndex]} `);
    }
}

japaneseRestaurant.foodDelivery({
    deliveryTime: "18:30",
    adress: 'streetName',
    appetizersIndex: 2
});




const {workingHours: Hours, restaurantName, categories} = japaneseRestaurant;
console.log(Hours, restaurantName, categories);

// Default Values
const {menu = [], appetizers: starterMenu = []} = japaneseRestaurant;
console.log(menu, starterMenu);

// Mutating Variables

let something = 3;
let anotherthing = 10;
const obj = {
    something: 12,
    anotherthing: 20
};

({something, anotherthing} = obj);
console.log(something, anotherthing);


// Inner Objects

const {sunday} = Hours;
const {sunday: {open: sundayOpen, close: sundayClose}} = Hours;
console.log(sunday);
console.log(sundayOpen, sundayClose);




/*

const arr = [1, 9, 10, 3, 6];

const [arrayElement1, arrayElement2, arrayElement3, arrayElement4, arrayElement5 ] = arr;
console.log(arrayElement1);
console.log(arrayElement2);
console.log(arrayElement3, arrayElement4);

*/

/*

const [category1, ,category3] = japaneseRestaurant.categories;
console.log(category1, category3);

*/

/*

let [main, ,secondary] = japaneseRestaurant.categories;
console.log(main, secondary);

*/

/*

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

*/

// Swaping variables

/*


[secondary, main ] = [main, secondary];
console.log(main, secondary);

ja

*/

//console.log(japaneseRestaurant.orderFood(2, 1));

// Returning 2 values from function
const [appetizer, main] = (japaneseRestaurant.orderFood(2, 1));
console.log(appetizer);
console.log(main);


//=======================================================================================

// Inner Destructuring
const newArr = [1, 2, [4, 5], 6];

//const [el1, el2, el3] = newArr;
//console.log(el1);
//console.log(el3);
//const [el1, el2, [innerEl1, innerEl2]] = newArr;
console.log(el1);
console.log(innerEl1);
console.log(innerEl2);


// Default Values

const someArr = [1, 2];

const [el1, el2, el3 = 10] = someArr;
console.log(el1, el2, el3);