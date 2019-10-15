/*CHALLENGE 1: LONGEST WORD
Return the longest word of a string
If more than one longest word, put into an array
ex. longestWord('Hello, my name is Brad') === 'hello'
ex. longestWord('Hello there, my name is Brad') === ['hello', 'there'] */

function findLongerWord(str){
  let arrayOfStrings= str.split("");// creat an array of strings breaking od every space
  var lonestString= ''; // Temporary placeholder for longest string

  for (let i=0;i<arrayOfStrings.length;i++){
      if(lonestString.length<arrayOfStrings[i].lenght){
          lonestString=arrayOfStrings[i];
      }
  }
  //Iteratre through the array and compar longesString with current string
  str= lonestString;
  return str.lenght;
}
findLongerWord("Hello, my name is Brad");


/*CHALLENGE 2: ARRAY CHUNKING
Split an array into chunked arrays of a specific length
ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]*/

let arr = [1,2,3,4,5,6,7,8,9,10,11];
let number = 2;

function chunk(arr, num){
    const chunked =[];
    for(let elem of arr){
        let last = chunked[chunked.lenght -1];
        if (!last || last.lenght === num){
            chunked.push([elem]);

        } else {
            last.push(elem);
        }
    }
    return chunked;
}
console.log(chunk(arr,number));




// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]


const numbers = [[1,2], [3,4], [5,6], [7]];
const numbersFlat = number.flat();

console.log(numbersFlat);




