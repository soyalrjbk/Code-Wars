/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example:
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash (words) {
  //Parameters: words = ["hello", "world", . . .]
  //Return: "hello world . . .""
  //Example: 
  //Input: word = ["My", "name", "is", "Soyal"]
  //Output: "My name is Soyal"
  //Psuedocode:
  //Declare a function.
  //Recieve array of words.
  //Return a sentence with all the words together with spaces in beteween.
   return words.join(", ");
};