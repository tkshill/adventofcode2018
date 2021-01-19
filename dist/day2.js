"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const charGroupReducer = (acc, char) => acc.has(char) ? acc.set(char, acc.get(char) + 1) : acc.set(char, 1);
const charGroupToRepeat = function (input) {
    const groups = Array.from(input.values());
    switch ([
        groups.some((element) => element === 3),
        groups.some((element) => element === 2),
    ]) {
        case [true, true]:
            return "twoAndThree";
        case [true, false]:
            return "threeTimes";
        case [false, true]:
            return "twoTimes";
        default:
            return "noRepeats";
    }
};
const outputReducer = function (out, rep) {
    switch (rep) {
        case "twoAndThree": {
            out.twos += 1;
            out.threes += 1;
            break;
        }
        case "threeTimes": {
            out.threes += 1;
            break;
        }
        case "twoTimes": {
            out.twos += 1;
            break;
        }
    }
    return out;
};
const part1 = (input) => input
    .trim()
    .split("\n")
    .map((str) => [...str].reduce(charGroupReducer, new Map()))
    .map(charGroupToRepeat)
    .reduce(outputReducer, { twos: 0, threes: 0 });
const showAnswers = function (input) {
    const ans1 = part1(input);
    console.log("Part 1: ", ans1.twos * ans1.threes);
};
exports.default = showAnswers;
//# sourceMappingURL=day2.js.map