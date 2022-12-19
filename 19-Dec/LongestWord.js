const longestWord = str => {
    
    const strArr = str.split(" ")
    let longestWord;
    let maxLength = 0;

    strArr.forEach(word => {
        if(word.length > maxLength){
            maxLength = word.length;
            longestWord = word
        }
    })

    return longestWord

    // split string by " "
    // declare a variable for length and assign it to 0
    // loop through the array and if the length of the word is greater than the number stored in a varable, replace it
    // return the variable

    // const alphabets = 'abcdefghijklmnopqrstuvwxyz'

}

console.log(longestWord("loop!!!!!, through the array and"))