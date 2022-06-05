//+1 

//let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];

//let teamA = [];
//let teamH = [];

//harryPotterTeam.forEach((item) => {
// if (item.includes('a')) {
//  teamA.push(item);
//}
//if (item.includes('A')) {
// teamA.push(item);
//}
//if (item.includes('H')) {
//teamH.push(item);
// }
//});

//console.log(teamA);
//console.log(teamH);

//+2

//let arr = [6, 3, "ten", 1, true, "4"];

//let sum = 0;
//let multiplication = 1;

//arr.forEach((item) => {
//if (typeof item === "number") {

//sum += item;
//multiplication *= item;
//}
//});

//console.log(sum, multiplication);

//+3

let numArr = [1, 3, 5, 7, 9, 11];

let squaresOfNumbers = [];

function showSquareOfNumbers(arr) {
    arr.forEach(item => squaresOfNumbers
        .push(Math.pow(item, 2)));
    return squaresOfNumbers;
};

showSquareOfNumbers(numArr);
console.log(squaresOfNumbers);

//+4

//let students = [
// { name: 'Alexey', id: 123, marks: 9 },
// { name: 'Vitalik', id: 101, marks: 5 },
//{ name: 'Tanya', id: 200, marks: 7 },
//{ name: 'Sasha', id: 115, marks: 10 },
//]

//let names = students.filter(item => {
//if (item.id === 101) {
// return item.name;
// }
//});

//console.log(names);

//+5

//let javaScriptTypes = ["number", "null", "undefined", "string"];

//javaScriptTypes.splice(4, 0, "bigint", "boolean", "object", "symbol");

//console.log(javaScriptTypes);

//+6

//let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];

//parfume.splice(3, 1, "Jo Malone");

//console.log(parfume);