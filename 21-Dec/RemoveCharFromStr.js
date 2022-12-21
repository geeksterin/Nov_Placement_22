// const removeCharactersFromString = (str, char) => str.replaceAll(char, "")



const removeCharactersFromString = (str, char) => {
    return str.split("").filter(c => c !== char).join("")
}

console.log(removeCharactersFromString("Hello world", "l"))
// Heo word


const removeChar = (str, char) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (char !== ch) {
      result += ch;
    }
  }
  console.log(result);
};

removeChar("hello", "e");