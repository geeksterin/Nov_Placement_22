function replaceWordInSentance(sentence,before,after){
    const strArr = sentence.split(" ")

    strArr.forEach((element,i) => {
        if(element === before){
            strArr[i] = after
        }
    })
    
    return strArr.join(" ")


}
console.log(replaceWordInSentance("My name is john doe","joh","jane"))