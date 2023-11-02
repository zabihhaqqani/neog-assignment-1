// 3. Write an ES6 function to reverse a string in JavaScript without using in-built methods.

export const reverseString = (str) => {
  // Your ES6 code here
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

console.log(reverseString("neoG Camp")); // pmaC Goen
