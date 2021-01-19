"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = showAnswers;
const adder = (n1, n2) => n1 + n2;
class InfiniteArray {
    constructor(source) {
        this.source = source;
        this.index = 0;
        this.length = source.length;
    }
    next() {
        const result = this.source[this.index];
        if (this.index === this.length - 1) {
            this.index = 0;
        }
        else {
            this.index++;
        }
        return result;
    }
}
function findRepeatedResult(infArr) {
    let accumulator = 0;
    let results = new Set();
    while (true) {
        let nextNum = infArr.next();
        var newVal = adder(accumulator, nextNum);
        if (results.has(newVal)) {
            break;
        }
        else {
            accumulator = newVal;
            results.add(newVal);
        }
    }
    return newVal;
}
function showAnswers(sourceString) {
    const STARTINGVALUE = 0;
    const toNum = (input) => parseInt(input);
    const numArray = sourceString.trim().split("\n").map(toNum);
    const answer = numArray.reduce(adder, STARTINGVALUE);
    const infiniteArr = new InfiniteArray(numArray);
    const answer2 = findRepeatedResult(infiniteArr);
    console.log("Part One answer: " + answer);
    console.log("Part Two answer: " + answer2);
}
//# sourceMappingURL=day1.js.map