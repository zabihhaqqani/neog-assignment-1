// 6. Write an ES6 function that takes an object with x and y properties and returns an array containing the values of x and y.

export const getCoordinates = ({ x, y }) => [x, y];

const point = { x: 5, y: 10 };
console.log(getCoordinates(point)); // [5, 10]
