const commonModule = require("./commonModule");

const matrix = [
    [-3, 5, -3],
    [-1, -2, 2],
];

let column = 3;
let line = 2;

let k = 1;
let s = 2;

// const matrix = CreateMatrix(line, column);

// fillMatrix(c, line, column);

console.log("Исходная матрица");
commonModule.printMatrix(matrix);

commonModule.exceptions(matrix, line, column, k, s);

console.log("Преобразованная матрица");
commonModule.printMatrix(matrix);
