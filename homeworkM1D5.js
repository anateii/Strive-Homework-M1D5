/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/


const printHeader = function(nameOfChapter) {
    console.log(`\n=========${nameOfChapter}=========`)
}



printHeader ("EXERCISE 1")

function area(l1, l2) {

    let resultOfArea = l1*l2
    return resultOfArea

}

let result = area (5,13)
console.log("\nThe area of the rectangle is: ", result)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

printHeader ("EXERCISE 2")


function crazySum(int1, int2) {
 if (int1===int2) {
     console.log (resultOfTheSum*3)
 }
 else if (int1!==int2) {
    let resultOfTheSum= int1+int2
    return resultOfTheSum
} 
}

let total = crazySum (34,36)
console.log("\nThe total of the crazySum is: ", total)




/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

printHeader ("EXERCISE 3")

function crazyDiff (a)
{
    let b = 19
    if (a>19) {
        let absoluteDiff = Math.abs(a-b)
        return (absoluteDiff*3)
    }
}

let c = 23
console.log ("\nThe final result is: ", crazyDiff(c))


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

printHeader ("EXERCISE 4")


function boundary (n) {
    if ( n<=100 && n>=20 || n===400) {
            return true
    }

}

let final = boundary(32)
console.log (final)

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

printHeader ("EXERCISE 5")

 /* EXERCISE 5
  Write a function called "strivify" which accepts a string as a parameter.
  It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
 */
 
 printHeader ("EXERCISE 5")
 
  
  const striviy = function(string) {
    return string.startsWith("Strive") ? string : "Strive" + string 
  }
  
  console.log(strivify("Strivers")); // Strivers
  console.log(strivify("Hello")) // Strive Hello

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
 /* EXERCISE 6
  Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
  HINT: Modulus Operator
 */
 
 
printHeader ("EXERCISE 6")
 
const check3and7 = function (n) {
    if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
      return true;
    } else {
      return false;
    }
  };
 
  console.log(check3and7(15));
  

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

printHeader ("EXERCISE 7")

    // Step 1. Create an empty string that will host the new created string
 
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];// or newString = newString + str[i];
    }
    return newString;
}
reverseString('hello');

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
function upperFirst (any) {

}


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
 /* EXERCISE 10
  Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
 */
 
printHeader ("EXERCISE 10")

const giveMeRandom = function (n) {
    const array = [];
    for (let i = 0; i <= n; i++) {
      array.push(Math.floor(Math.random() * 10));
    }
    return array;
  };
  console.log(giveMeRandom(7));


/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
