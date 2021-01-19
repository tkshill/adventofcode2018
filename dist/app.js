"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const day1_1 = __importDefault(require("./day1"));
const day2_1 = __importDefault(require("./day2"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let filepath1 = path_1.default.join(__dirname, "input.txt");
let sourceString1 = fs_1.default.readFileSync(filepath1, "utf8");
day1_1.default(sourceString1);
filepath1 = path_1.default.join(__dirname, "input2.txt");
sourceString1 = fs_1.default.readFileSync(filepath1, "utf8");
day2_1.default(sourceString1);
//# sourceMappingURL=app.js.map