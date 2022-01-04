let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
const johnHeight = 1.95;


let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);