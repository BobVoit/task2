
/**
 * 
 * @param {Number} n 
 * @param {Number} m 
 * @returns - матрицу размеров n на m
 */
module.exports.createMatrix = (n, m) => {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const newLine = [];
        for (let j = 0; i < m; j++) {
            newLine.push(0);
        }
        matrix.push(newLine);
    }

    return matrix;
}

/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns - рандомное число в пределах от min до max
 */
 module.exports.getRandomValues = (min, max) => {
    return Math.random() * (max - min) + min;
}


module.exports.fillMatrix = (matrix) => {
    matrix.forEach(line => line.forEach(element => element = getRandomValues(1, 100)));
}


module.exports.exceptions = (matrix, m, n, k, s) => {

    let memory = matrix[k][s];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i != k && j != s) {
                matrix[i][j] = (matrix[i][j] * memory - matrix[i][s] * matrix[k][j]) / memory;
            }
        } 
    }

    for (let i = 0; i < m; i++) {
        if (i != k) {
            matrix[i][s] = matrix[i][s] / memory * (-1);
        }
    }

    for (let j = 0; j < n; j++) {
        if (j != s) {
            matrix[k][j] = matrix[k][j] / memory;
        }
    }

    matrix[k][s] = 1 / matrix[k][s];
}

module.exports.printMatrix = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("  "));
    }
}