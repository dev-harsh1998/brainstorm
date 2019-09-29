const wordsRev = str => {
  let arr = str.split(" ");
  let rev = "";
  arr.forEach(element => {
    rev =
      rev +
      element
        .split("")
        .reverse()
        .join("") +
      " ";
  });

  return rev;
};

console.log(wordsRev("my name is potato"));
console.log(wordsRev("lorem ipsum enim nec dui nunc mattis"));
