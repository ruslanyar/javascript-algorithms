// Your task is to write a function that takes a string and return a new string with all vowels removed.
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(
  disemvowel("No offense but, \nYour writing is among the worst I've ever read")
);
