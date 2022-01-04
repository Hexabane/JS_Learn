const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 123) / 3;

let output;
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    output = `Dolphins have won the competition with a higher 
    average score of ${avgDolphins} against Koalas which have a score of ${avgKoalas}`;
}
else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    output = `Koalas have won the competition with a higher 
    average score of ${avgKoalas} against Dolphins which have a score of ${avgDolphins}`;
}
else {
    output = 'Its a DRAW!';
}

console.log(output);
