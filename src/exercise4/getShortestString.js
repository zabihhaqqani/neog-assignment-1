// 4. Write an ES6 function that takes an array of strings and returns the shortest string in the array.

export const getShortestString = (arr) => {
  // Your ES6 code here
  let shortestString = arr[0];
  for (let i = 0; i < arr.length; i++)
    arr[i].length < shortestString.length ? (shortestString = arr[i]) : null;

  return shortestString;
};

console.log(getShortestString(["primary", "secondary", "education", "exams"])); // exams
