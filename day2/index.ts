import * as fs from 'fs';
const input = fs.readFileSync('./day2/input.txt','utf8').split('\n');

let sumGameIDsPossible = 0;
enum CountPerColor {
    red = 12,
    green = 13,
    blue = 14
}

function partOne() {
    input.forEach(row => {
        let round: {red: number, green: number, blue: number} = {
            red: 0,
            green: 0,
            blue: 0
        };
        const splitRow = row.split(":");
        const gameId = parseInt(splitRow[0].replaceAll(/\D/g, ""));
        const unparsedRounds = splitRow[1].split(";");
        
        let countGameId = true;

        for (var unparsedRound in unparsedRounds) {
            unparsedRounds[unparsedRound].split(",").forEach(value => {
                const [,amount, color] = value.split(" ");
                round[color] = amount;
                if (CountPerColor[color] < amount) {
                    countGameId = false;
                }
            });
        }
        if (countGameId) sumGameIDsPossible += gameId;
    });
}

// partOne();

let sumPowerOfCubes = 0;

function partTwo() {
    input.forEach(row => {
        let round: {red: number | undefined, green: number | undefined, blue: number | undefined} = {
            red: undefined,
            green: undefined,
            blue: undefined,
        };
        const splitRow = row.split(":");
        const unparsedRounds = splitRow[1].split(";");
        
        for (var unparsedRound in unparsedRounds) {
            unparsedRounds[unparsedRound].split(",").forEach(value => {
                const [,amount, color] = value.split(" ");
                if (!round[color] || round[color] < parseInt(amount)) {
                    round[color] = amount;
                }
            });
        }

        const powerOfCubes = round.red * round.green * round.blue;
        sumPowerOfCubes += powerOfCubes;
    });
}

// partTwo();
