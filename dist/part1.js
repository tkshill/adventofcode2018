"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAnswers = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const STARTINGVALUE = 0;
const filepath = path_1.default.join(__dirname, "input.txt");
const sourceString = fs_1.default.readFileSync(filepath, "utf8");
const toNum = (input) => parseInt(input);
const numArray = sourceString.trim().split("\n").map(toNum);
const adder = (n1, n2) => n1 + n2;
const answer = numArray.reduce(adder, STARTINGVALUE);
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
const infiniteArr = new InfiniteArray(numArray);
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
const answer2 = findRepeatedResult(infiniteArr);
function showAnswers() {
    console.log("Part One answer: " + answer);
    console.log("Part Two answer: " + answer2);
}
exports.showAnswers = showAnswers;
//# sourceMappingURL=part1.js.map