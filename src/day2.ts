type Repeat = "noRepeats" | "twoTimes" | "threeTimes" | "twoAndThree";

interface CharGroup extends Map<string, number> {}

interface Output {
  twos: number;
  threes: number;
}

const charGroupReducer = (acc: CharGroup, char: string): CharGroup =>
  acc.has(char) ? acc.set(char, acc.get(char)! + 1) : acc.set(char, 1);

const charGroupToRepeat = function (input: CharGroup): Repeat {
  const groups = Array.from(input.values());
  switch (
    [
      groups.some((element) => element === 3),
      groups.some((element) => element === 2),
    ]
  ) {
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

const outputReducer = function (out: Output, rep: Repeat): Output {
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

const stringToOutput = (input: string): Output =>
  input
    .trim()
    .split("\n") // make list of strings
    .map((str) => [...str].reduce(charGroupReducer, new Map())) // convert to list of CharGroups
    .map(charGroupToRepeat) //convert to repeat
    .reduce(outputReducer, { twos: 0, threes: 0 }); // reduce to output

const showAnswers = function (input: string): [number, number] {
  const part1 = stringToOutput(input);
  return [part1.twos * part1.threes, 0];
};

export default showAnswers;
