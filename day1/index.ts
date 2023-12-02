import * as fs from 'fs';
const input = fs.readFileSync('./day1/input.txt','utf8').split('\n');

let calibrationValueCount = 0;

function partOne() {
    input.map((row) => {
        const numbers = row.replaceAll(/\D/g, "");
        const calibrationValue = parseInt(numbers[0] + numbers[numbers.length -1]);
        calibrationValueCount += calibrationValue;
    })
}


let calibrationValueCount2 = 0;
enum WordsToNumbers {
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
}

function partTwo() {
    input.map((row) => {
        const matches = Array.from(row.matchAll(/(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g)).map(result => result[1]);
        const numbers = matches.map(value => {
            if(parseInt(value)){
                return parseInt(value);
            } 
            return WordsToNumbers[value];
        });
        const calibrationValue = parseInt(numbers[0].toString() + numbers[numbers.length -1].toString());
        calibrationValueCount2 += calibrationValue;
    })
}

partTwo();
console.log(calibrationValueCount2);
