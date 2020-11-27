/*
* This program recieves inputs like a3tx2z and translates them to strings of 
* letters that are defined by their numbers (blowing up a string). For example,
* a3tx2z would be attttxzzz if it was blown up by this program
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-11-27
* Class StringExpand.
*/

const prompt = require('prompt-sync')({sigint: true});

var translString = " ";
var charCount = 0;
var timesLooped = 0;


// Accepts user input in str form
const userString = prompt('Enter a string that needs to be expanded: ');

/* 
* Process: loop automatically moves through list of characters in the
* string marking those that are integers. If they are integers, program will
* find next text object and print that as many times as integers value
*/
for (charCount = 0; charCount < userString.length; charCount++) {
  // Catches any errors in terms of letters at the end of the string
  try {

    /* 
    * If character is marked as a digit in the next line below
    * enter loop and add it to the final string as many times as 
    * the integers value
    */
    if (isNaN(userString.charAt(charCount)) == false) {

      for (timesLooped = 0; timesLooped < userString.charAt(charCount);
           timesLooped++) {

        // Adds letter to final string (charcount) times
        translString = translString + (userString.charAt(charCount + 1));
      }
      // if a character isnt marked as a digit, add it to translString
    } else {
      translString = translString + userString.charAt(charCount);
    }
  //Prevents program from crashing when numbers are on the end of the string
  } catch (err) {
  translString = translString + userString.charAt(charCount);
  }
}
//outputs translated string
console.log('Translated string:' + translString);
