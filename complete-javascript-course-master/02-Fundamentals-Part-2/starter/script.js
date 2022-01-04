'use strict';

/////////////////////////////////FUNCTIONS////////////////////////////

// function logger() {
//     console.log("My name is Kunal");
// }

// //calling / running / invoking the function
// logger();

// function fruitProcessor(apples, oranges) {

//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const mixFruitJuice = fruitProcessor(5, 3)
// console.log(mixFruitJuice);

/////////////////////////////ARROW FUNCTIONS////////////////////////////////

// const calcAge = birthYear => 2021 - birthYear;
// const age = calcAge(2001);
// console.log(age);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;

//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2001, "Kunal"));

////////////////////////FUNCCEPTION////////////////////

// function cutFruitPcs(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePcs = cutFruitPcs(apples);
//     const orangePcs = cutFruitPcs(oranges);

//     const juice = `Juice with ${applePcs} pcs of apples and ${orangePcs} pcs of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

//////////////////////////////////ARRAYS//////////////////////////////

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2])
// friends[2] = 'Jay';
// console.log(friends);

// console.log(years[0]);
// console.log(years[3]);
// years[3] = 2021;
// console.log(years);


// const firstName = 'Kunal';
// const personalInfo = [firstName, 'Goyal', 2021 - 2001, 'student', friends];
// console.log(personalInfo);

///////////////////////////////////ARRAY FUNCTIONS//////////////////////////////////

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// //adding elements at the end of the array
// friends.push('Kunal');
// console.log(friends);

// //adding elements at the begining of the array
// friends.unshift('Luc');
// console.log(friends);

// //remove the last element from the array
// //adding this method into a variable gets the removed element as data
// friends.pop();
// console.log(friends);

// //remove the first element from the array
// //adding this method into a variable gets the removed element as data
// friends.shift();
// console.log(friends);

// //Check if a certain element exists in the array
// // - the action can be stored as a boolean value or used in an if statement as it is.
// //example 1
// if (friends.includes('Steven')) {
//     console.log('Steven exists as a element in this array');
// }
// //example 2
// const check = friends.includes('Kunal');
// console.log(check);

/////////////////////////////////////OBJECTS////////////////////////////////////

