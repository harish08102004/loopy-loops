// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
var KalvianOne = "XXXX";
console.log(`The driver's name is ${KalvianOne}` )
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var KalvianTwo = "YYY";
console.log(`The navigator's name is ${KalvianTwo}` )
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var lengthOne = KalvianOne.length;
var lengthTwo = KalvianTwo.length;

if(lengthOne>lengthTwo){
  console.log("The driver has the longest name, it has XX characters.")
}
else if(lengthOne==lengthTwo){
  console.log("Wow, you both have equally long names, XX characters!")
}
else{
  console.log("It seems that the navigator has the longest name, it has XX characters.")
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
function checkForVowels(givenString){
  const vowels = ["a","e","i","o","u"];
  let indexArray = [];
  let vowelsArray = [];
  for(let index=0; index<givenString.length;index++){
    // can use vowels.include -- but inbuilt functions are to be avoided
    for(let vowelIndex=0; vowelIndex<vowels.length; vowelIndex++){
      if(vowels[vowelIndex]==givenString[index]){
        vowelsArray.push(givenString[index]);
        indexArray.push(index);
      }

    }
  }
  if(vowelsArray.length>0){
    //Kalvian a i a 1 4 5
    console.log(`${givenString} ${[...vowelsArray]} ${[...indexArray]}`);
  }
  else{
    console.log("no vowels")
  }

}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function checkForUpperCase(givenString){

  let uppercase=0;
  let lowercase=0;

  for(let index=0; index<givenString.length; index++){
    if(givenString[index]==givenString[index].toUpperCase()){
      uppercase++;
    }
    else{
      lowercase++;
    }
  }

  console.log(`Uppercase: ${uppercase}, Lowercase: ${lowercase}`)
}

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"


function playWithChar(driver, navigator){
  let ans = "";
  for(let index=0; index<driver.length; index++){
    ans+= driver[index].toUpperCase()+ " "
  }
  console.log(ans)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

  let reversedNav = "";
  for(let index=(navigator.length)-1; index>=0; index--){
    reversedNav+= navigator[index]
  }
  console.log(reversedNav);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

let mergedName = driver+" "+navigator;
let reverseMerge = navigator+" "+driver;

console.log(mergedName,reverseMerge);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

  let lexicographicOrderList = [driver,navigator];
  lexicographicOrderList.sort();
  if(lexicographicOrderList[0]=="Driver"){
    console.log(`The driver's name goes first.`);
  }
  else if(lexicographicOrderList[0]=="Navigator"){
    console.log(`Yo, the navigator goes first definitely.`);
  }
  else{
    console.log(`What?! You both have the same name?`);
  }
} 

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
