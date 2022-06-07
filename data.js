// Generating Fake data for the Meetup Usecase: 
// To run this file do the following steps on the terminal - 
/*
 1. npm init -y 
 2. npm i faker  // this installs faker.js
 3. node data.js
*/
const faker = require('faker');

let Household_income = faker.commerce.price(10000, 90000, 0, '$');
let Age = faker.mersenne.rand(90, 18);
let gender = faker.name.gender();
let education = faker.name.jobTitle();
let state = faker.address.state()
let disability = faker.datatype.boolean();
let mean_income = faker.commerce.price(10000, 90000, 0, '$');
let internet_access = faker.datatype.boolean();
let computer_access = faker.datatype.boolean();


console.log(`Household Income: ${Household_income}`);
console.log(`Age: ${Age}`);
console.log(`Gender: ${gender}`);
console.log(`Education: ${education}`);
console.log(`State: ${state}`);
console.log(`Disability: ${disability}`);
console.log(`Mean Household Income: ${mean_income}`);
console.log(`Internet Access: ${internet_access}`);
console.log(`Computer Access: ${computer_access}`);