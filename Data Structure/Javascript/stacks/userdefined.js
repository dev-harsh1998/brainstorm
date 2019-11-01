// Stacks
// functions : push, pop, peek, size

// userdefined Functions

let Stack = function() {
  this.count = 0;
  this.storage = {};

  //push into stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count += 1;
  };

  //pop from stack
  this.pop = function() {
    if (this.count <= 0) return undefined;

    this.count -= 1;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //peek from stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };

  //returnes the size of stack
  this.size = function() {
    return this.count;
  };

  //returnes the stack
  this.stack = function() {
    return this.storage;
  };
};

// example trough palindrome of string
let letters = new Stack();

let word = "racecar";
let revWord = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  revWord += letters.pop();
}

console.log(revWord === word ? "It's Palindrome" : "It's not palindrome");
