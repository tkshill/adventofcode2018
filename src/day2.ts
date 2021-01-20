/*
PART ONE
*/

import { exception } from "console";

// ----------------------- DATA STRUCTURES -------------------------

type Repeat = "noRepeats" | "twoTimes" | "threeTimes" | "twoAndThree";

interface CharCount extends Map<string, number> {}

interface Output {
  twos: number;
  threes: number;
}

/*
To be used with the .reduce() list method.
Helps fold a list of characters into a Map where the values are the amount of times the
character appears in a string.
*/
const charCountReducer = (acc: CharCount, char: string): CharCount =>
  acc.has(char) ? acc.set(char, acc.get(char)! + 1) : acc.set(char, 1);

/*
To be used with the .reduce() list method.
Helps fold a list of Repeats into an Output
*/
const outputReducer = function (out: Output, rep: Repeat): Output {
  switch (rep) {
    case "twoAndThree": {
      out.twos = out.twos + 1;
      out.threes = out.threes + 1;
      break;
    }
    case "threeTimes": {
      out.threes = out.threes + 1;
      break;
    }
    case "twoTimes": {
      out.twos = out.twos + 1;
      break;
    }
  }
  return out;
};


const charCountToRepeat = function (input: CharCount): Repeat {
  const groups = [...input.values()];
  const hasThrees = groups.some((i) => i == 3);
  const hasTwos = groups.some((i) => i == 2);

  if (hasThrees && hasTwos) {
    return "twoAndThree";
  } else if (hasThrees) {
    return "threeTimes";
  } else if (hasTwos) {
    return "twoTimes";
  } else {
    return "noRepeats";
  }
};

const part1 = (input: string): Output =>
  input
    // convert input to list of strings
    .trim()
    .split("\n")
    // convert each string to a CharCount map
    .map((str) => [...str].reduce(charCountReducer, new Map()))
    // convert each CharCount to the correct type of Repeat
    .map(charCountToRepeat)
    // reduce Repeats to a single Output
    .reduce(outputReducer, { twos: 0, threes: 0 });

/*
PART TWO
*/

interface Pair {
  str1: string;
  str2: string;
}

// make two arrays an array of pairs
const zip = (input1: string[], input2: string[]): Pair[] =>
  input1.map((char, index) => <Pair>{ str1: char, str2: input2[index]! });

// checks if two strings arrays (of equal length) differ by only one letter
const areAlmost = function (input1: string, input2: string): boolean {
  const filtered_zip = zip([...input1], [...input2]).filter(
    (pair) => pair.str1 !== pair.str2
  );

  return filtered_zip.length === 1 ? true : false;
};

const part2 = function (input: string): string {
  const lines = input.trim().split("\n");

  // explicitly do NOT want to loop through the whole array so traditional for loop
  for (let i = 0; i < lines.length - 2; i++) {
    let string1 = lines[i]!;

    for (let i2 = i + 1; i2 < lines.length - 1; i2++) {
      let string2 = lines[i2]!;

      if (areAlmost(string1, string2)) {
        const matchingPair = zip([...string1], [...string2]);
        return matchingPair
          .filter((pair) => pair.str1 === pair.str2)
          .map((pair) => pair.str1)
          .join("");
      }
    }
  }
  // if it didn't return before, I've screwed up
  throw exception;
};

//
const showAnswers = function (input: string): [string, string] {
  const answer1 = part1(input);
  const answer2 = part2(input);
  return [(answer1.twos * answer1.threes).toString(), answer2];
};

export default showAnswers;
