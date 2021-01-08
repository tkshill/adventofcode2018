import fs from "fs";
import path from "path";

export { showAnswers };

const STARTINGVALUE = 0;
const filepath = path.join(__dirname, "input.txt");
const sourceString = fs.readFileSync(filepath, "utf8");

// PART ONE

const toNum = (input: string): number => parseInt(input);
const numArray = sourceString.trim().split("\n").map(toNum);

const adder = (n1: number, n2: number): number => n1 + n2;
const answer = numArray.reduce(adder, STARTINGVALUE);

// PART TWO

class InfiniteArray<T> {
  private index: number;
  private length: number;

  constructor(private readonly source: T[]) {
    this.index = 0;
    this.length = source.length;
  }

  next(this: InfiniteArray<T>): T {
    const result = this.source[this.index]!;

    if (this.index === this.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    return result;
  }
}

const infiniteArr = new InfiniteArray(numArray);

function findRepeatedResult(infArr: InfiniteArray<number>): number {
  let accumulator = 0;
  let results: Set<number> = new Set();

  while (true) {
    let nextNum = infArr.next();
    var newVal = adder(accumulator, nextNum);

    if (results.has(newVal)) {
      break;
    } else {
      accumulator = newVal;
      results.add(newVal);
    }
  }
  return newVal;
}

const answer2 = findRepeatedResult(infiniteArr);

// PRINT RESULTS

function showAnswers() {
  console.log("Part One answer: " + answer);
  console.log("Part Two answer: " + answer2);
}
