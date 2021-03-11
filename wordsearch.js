/*
Wordsearch.js Pair Programming Assignment 
Team members: Divya Jagadish & Martin Ho

Transpose() supplied by Martin Ho and Michael Antone
*/ 



const makeEmpty = (x) => {
  let matrix = [];
  for (let i = 0; i < x; i++) {
    matrix.push([]);
  }
  return matrix;
};


const transpose = function(matrix) {
  // get dimensions of the matrix
  let newArr = [];
  let rows = matrix.length;
  let col = matrix[0].length;
  
  // create an empty array of arrays
  newArr = makeEmpty(col);
  
  //populate matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < col; j++) {
      newArr[j][i] = matrix[i][j];
    }
  }
  return newArr;
};


const find = function(letters, word) {
  for (let l of letters) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

const wordSearch = (letters, word) => {
  let found;
  if (word.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  found = find(horizontalJoin, word);
  if (!found) {
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    found = find(verticalJoin, word);
  }
  return found;
       
};

module.exports = wordSearch;
