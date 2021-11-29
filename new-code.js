
function addToZero(arr) {

    // check each element in array
    for (var i = 0; i < arr.length; i++) { 
  
      // check each other element in the array
      for (var j = i + 1; j < arr.length; j++) {
  
        // determine if these two elements sum to S
        if (arr[i] + arr[j] === 0) {
          console.log("true")}

          else{console.log( "false")}
      }
    }}
  
  let newArr = [3, 5, 2, -4, 8, 11]
  addToZero(newArr)


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

//isPangram took 0.3046998977661133 milliseconds

const { performance } = require('perf_hooks');

function findLongestWord(str) {
    let lengths = str.split(' ').map(word => word.length)
    return Math.max(...lengths)
  }
//   findLongestWord took 0.4754999876022339 




