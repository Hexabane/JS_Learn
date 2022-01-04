let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
const johnHeight = 1.95;


let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;

let output;
if (markBMI > johnBMI) {
    output = `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`;
}
else {
    output = `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`;
}


console.log(output);
