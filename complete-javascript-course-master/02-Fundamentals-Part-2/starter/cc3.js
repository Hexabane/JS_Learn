
const john = {
    firstName: 'John',
    lastName: 'Smith',
    height: '1.95',
    weight: '92',
    BMI: function () {
        return this.weight / this.height ** 2
    }
}

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: '1.69',
    weight: '78',
    BMI: function () {
        return this.weight / this.height ** 2
    }

    // output: function () {
    //     return `${this.firstName}'s BMI (${this.BMI()}) is higher`
    // }
}

let output;
if (mark.BMI() > john.BMI()) {
    output = `Mark's BMI (${mark.BMI()}) is higher than John's (${john.BMI()})`;
}
else {
    output = `John's BMI (${john.BMI()}) is higher than Mark's (${john.BMI()})`;
}

console.log(output);