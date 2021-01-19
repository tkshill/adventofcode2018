import day1answer from "./day1";
import day2answer from "./day2";
import fs from "fs";
import path from "path";

// day  1
let filepath = path.join(__dirname, "input.txt");
let sourceString = fs.readFileSync(filepath, "utf8");

let [part1, part2] = day1answer(sourceString);
console.log("Part One: " + part1, "Part Two: " + part2);

// day  2
filepath = path.join(__dirname, "input2.txt");
sourceString = fs.readFileSync(filepath, "utf8");

[part1, part2] = day2answer(sourceString);
console.log("Part One: " + part1, "Part Two: " + part2);