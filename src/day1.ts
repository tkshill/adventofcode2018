export default showAnswers;

const adder = (n1: number, n2: number): number => n1 + n2;

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

function showAnswers(sourceString: string): [string, string] {
  // PART ONE

  const STARTINGVALUE = 0;

  const toNum = (input: string): number => parseInt(input);
  const numArray = sourceString.trim().split("\n").map(toNum);
  const answer = numArray.reduce(adder, STARTINGVALUE);

  // Part two

  const infiniteArr = new InfiniteArray(numArray);
  const answer2 = findRepeatedResult(infiniteArr);

  return [answer.toString(), answer2.toString()];
}
