let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    let output;
    if (avgDolphins >= avgKoalas * 2) {
        output = `Dolphins have won the competition with a higher 
    average score of ${avgDolphins} against Koalas which have a score of ${avgKoalas}`;
    }
    else if (avgDolphins * 2 <= avgKoalas) {
        output = `Koalas have won the competition with a higher 
    average score of ${avgKoalas} against Dolphins which have a score of ${avgDolphins}`;
    }
    else {
        output = 'No Team Wins!';
    }

    return output;
}



console.log(checkWinner(avgDolphins, avgKoalas));
