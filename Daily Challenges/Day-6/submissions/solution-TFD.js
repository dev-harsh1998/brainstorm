const reverse = str => {
  let arr = str.split("");
  let output = [];
  for (let i = arr.length - 1; i >= 0; i--) output.push(arr[i]);

  arr = output.join("").split(" ");
  output = [];
  for (let i = arr.length - 1; i >= 0; i--) output.push(arr[i]);
  return output.join(" ");
};

console.log(reverse("My name is potato"));
