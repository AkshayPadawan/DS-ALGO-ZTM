let value = "mama yo";
let newString = "";
console.log(typeof value);
if (value && typeof value === "string") {
  for (let i = value.length - 1; i >= 0; i--) {
    newString = newString + value[i];
  }
  console.log(newString);
  console.log(value.split("").reverse().join(""));
  console.log([...value].reverse().join(""));
}
