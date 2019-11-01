// Stacks
// functions : push, pop, peek, size

// pre-built functions

// example trough palindrome of string. 

var letters = [];
var word = "lmao";

var revWord = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  revWord += letters.pop(word[i]);
}

word === revWord
  ? console.log("It's Palindrome")
  : console.log("It's not palindrome");
