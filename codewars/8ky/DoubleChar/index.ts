// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// "String"      -> "SSttrriinngg"
// "Hello World" -> "HHeelllloo  WWoorrlldd"
// "1234!_ "     -> "11223344!!_"

function doubleChar(str: string): string {
  return str.replace(/(.)/g, '$1$1');
}

console.log(doubleChar('String'));
console.log(doubleChar('Hello World'));
console.log(doubleChar('1234!_ '));
