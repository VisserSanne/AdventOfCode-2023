import * as fs from 'fs';
const input = fs.readFileSync('./day9/input.txt','utf8').split('\n');

function toZeroAndBeyond(history: number[]) {
    const mappedHistory = [history[history.length - 1]]; // array with all the latest value in each history row
    const newHistoryRow = [];

    for(var index = 0; index < history.length - 1; index++) {
        newHistoryRow.push(history[index + 1] - history[index]);
    }
    if (!newHistoryRow.every(value => value === 0)) {
        mappedHistory.push(...toZeroAndBeyond(newHistoryRow), 0);
    }
    return mappedHistory;
}

function extrapolateNextValue(lastValuesOfHistoryRows: number[]) {
    return lastValuesOfHistoryRows.reduceRight((acc, curr) => acc + curr, 0)
}

function partOne() {
    const historyArray = input.map(history => history.split(" ").map(item => parseInt(item)));
    const total = historyArray.reduce((acc, curr) => acc + extrapolateNextValue(toZeroAndBeyond(curr)), 0)

    return total;
}

// console.log(partOne())


function partTwo() {
    const historyArray = input.map(history => history.split(" ").map(item => parseInt(item)).reverse());
    const total = historyArray.reduce((acc, curr) => acc + extrapolateNextValue(toZeroAndBeyond(curr)), 0)

    return total;
}

console.log(partTwo());