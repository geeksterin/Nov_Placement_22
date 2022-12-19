// Solution #1
// function reverseAString(str) {
//     return str.split("").reverse().join("");
    // let reveresedString = ""
    // const arrayOfCharacters = str.split("")
    // console.log(arrayOfCharacters)

    // const reversedArrayOfCharacters = arrayOfCharacters.reverse()
    // console.log(reversedArrayOfCharacters)

    // reveresedString = reversedArrayOfCharacters.join("") 


    // .reverse() - array
    // .split()  - "something".split("") - "this is geekster class".split("i")
    // .join()


    // return 
// }

// Solution #2
function reverseAString(str) {
    // str.charAt()
    const strInArray = str.split("")
    // ["s", "o", "m", "e"]
    const reversedCharArray = []
    for(let i=0; i<strInArray.length; i++) {
        reversedCharArray.push(strInArray[strInArray.length-i-1])
    }
    return reversedCharArray.join("")

}

console.log(reverseAString("some"))