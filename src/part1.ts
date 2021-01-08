import fs from "fs";
import path from "path";

export { showAnswers };

const STARTINGVALUE = 0;
const filepath = path.join(__dirname, "input.txt");
const sourceString = fs.readFileSync(filepath, "utf8");

const toNum = (input: string): number => parseInt(input);
const numArray = sourceString.trim().split("\n").map(toNum);

// PART ONE
const adder = (n1: number, n2: number): number => n1 + n2;

// PART TWO

class InfiniteArray<T> {
  private source: Array<T>;
  private index: number;
  private length: number;

  constructor(a: T[]) {
    this.source = a;
    this.index = 0;
    this.length = a.length;
  }

  next(): T {
    const result = this.source[this.index];

    if (this.index === this.source.length - 1) {
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
  let newVal = 0;

  while (true) {
    let nextNum = infArr.next();
    newVal = adder(accumulator, nextNum);

    if (results.has(newVal)) {
      break;
    } else {
      results.add(newVal);
    }
  }
  return newVal;
}

function showAnswers() {
  const answer = numArray.reduce(adder, STARTINGVALUE);
  console.log("Part One answer: " + answer);

  const answer2 = findRepeatedResult(infiniteArr);
  console.log("Part Two answer: " + answer2);
}
