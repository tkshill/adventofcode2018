"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAnswers = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var STARTINGVALUE = 0;
var filepath = path_1.default.join(__dirname, "input.txt");
var sourceString = fs_1.default.readFileSync(filepath, "utf8");
var toNum = function (input) { return parseInt(input); };
var numArray = sourceString.trim().split("\n").map(toNum);
// PART ONE
var adder = function (n1, n2) { return n1 + n2; };
// PART TWO
var InfiniteArray = /** @class */ (function () {
    function InfiniteArray(a) {
        this.source = a;
        this.index = 0;
        this.length = a.length;
    }
    InfiniteArray.prototype.next = function () {
        var result = this.source[this.index];
        if (this.index === this.source.length - 1) {
            this.index = 0;
        }
        else {
            this.index++;
        }
        return result;
    };
    return InfiniteArray;
}());
var infiniteArr = new InfiniteArray(numArray);
function findRepeatedResult(infArr) {
    var accumulator = 0;
    var results = new Set();
    var newVal = 0;
    while (true) {
        var nextNum = infArr.next();
        newVal = adder(accumulator, nextNum);
        if (results.has(newVal)) {
            break;
        }
        else {
            results.add(newVal);
        }
    }
    return newVal;
}
function showAnswers() {
    var answer = numArray.reduce(adder, STARTINGVALUE);
    console.log("Part One answer: " + answer);
    var answer2 = findRepeatedResult(infiniteArr);
    console.log("Part Two answer: " + answer2);
}
exports.showAnswers = showAnswers;
//# sourceMappingURL=part1.js.map