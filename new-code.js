  const addToZero = (arr) => {
    const sumSet = new Set();
 
    let sum = 0; 
    // line 24 sets our desired sum to be 0
    for (let i = 0 ; i < arr.length ; i++) // check each element in array
    {
        sum += arr[i];
        // If prefix sum is 0
        // or it is already present
        if (sum === 0 || sumSet.has(sum)) //.has function will check if we have the sum we want and return a boolean value
            return true; 
 
        sumSet.add(sum);
    }
    return false;
}
let newArr = [3, 5, 2, -4, 8, 11]
addToZero(newArr)

// big o = o(n)
//addToZero took 11.983099937438965 milliseconds

function hasUniqueChars(string){
    let array = string.split("");

    let result = {};

    for (let i = 0; i < array.length; i++){
        if (result[array[i]]){
            return false;
        }else{
            result[array[i]] = true;
            }
    }
    return true
}
//big o = o(n)
//hasUniqueChars took 0.22029995918273926 milliseconds

const str = 'We promptly judged antique ivory buckles for the next prize';
const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(str));
//big o = o(n)
//isPangram took 0.3046998977661133 milliseconds

const { performance } = require('perf_hooks');

function findLongestWord(str) {
    let lengths = str.split(' ').map(word => word.length)
    return Math.max(...lengths)
  }
  //big o = o(n)
//   findLongestWord took 0.4754999876022339 




