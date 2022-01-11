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

// const jonas = {
//     firstName: 'Kunal',
//     lastName: 'Goyal',
//     age: 2021 - 2001,
//     job: 'Student',
//     friends: ['Luc', 'Stephan', 'Peter']
// };

// console.log(jonas['age']);
// console.log(jonas.age);
// //the below invoke of object is not possible with dot notation only []bracket notation.
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey], jonas['last' + nameKey]);

// //how dot notation calling of an object can be implemented
// const userInput = prompt('What do you want to know about Kunal? choose between ' +
//     'firstName, lastName, age, job or friends');

// if (jonas[userInput]) {
//     console.log(jonas[userInput]);
// }
// else {
//     console.log('Wrong request! choose between firstName, lastName, age, job or friends');
// }

// //how to add elements/variables in the object
// jonas.location = 'India';
// jonas['instagram'] = 'goyal_kunal';
// console.log(jonas);
// console.log(jonas)

////////////////////////////////OBJECT METHODS/////////////////////////////////////////

// const jonas = {
//     firstName: 'Kunal',
//     lastName: 'Goyal',
//     birthYear: 2001,
//     job: 'Student',
//     friends: ['Luc', 'Stephan', 'Peter'],
//     hasDriversLicense: true,

//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);

// console.log(`${jonas.firstName} is a ${jonas.age}-year old teacher, and he has ${jonas.hasDriversLicense ? 'a' : 'no'} driver's license.`)
