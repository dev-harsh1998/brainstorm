const rev = str => {
  let arr = str.split("");
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }

  let rev = output.join("").split(" ");
  output = [];
  for (let i = rev.length - 1; i >= 0; i--) {
    output.push(rev[i]);
  }

  return output.join(" ");
};

const isPalindrome = str =>
  str.toLowerCase() === rev(str).toLowerCase() ? true : false;

const countRatio = str => {
  let vowel = (consonant = 0);
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].toLowerCase();
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      vowel += 1;
    } else if (char == " ") continue;
    else consonant += 1;
  }

  return (vowel / consonant) * 100;
};

const palindrome_and_ratio = str => {
  return {
    isPalindrome: isPalindrome(str),
    ratio: countRatio(str)
  };
};

console.log(palindrome_and_ratio("Potato"));
console.log(palindrome_and_ratio("I am working on brainstorm"));
console.log(palindrome_and_ratio("Wow"));
