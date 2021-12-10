const fs = require("fs");
const puzzleData = fs.readFileSync("./input.txt").toString().split("\n");

const counts = Array(12).fill(0, 0, 12);

puzzleData.forEach((string) => {
    string.split("").forEach((char, i) => {
        if (char == "1") {
            counts[i]++;
        }
    });
});

let gamma = parseInt(
    counts.reduce((p, c) => `${p}${c > 500 ? 1 : 0}`, ""),
    2
);
let epsilon = parseInt(
    counts.reduce((p, c) => `${p}${c < 500 ? 1 : 0}`, ""),
    2
);

console.log(gamma * epsilon);
