// implement same solution using .repeat

const repeatStringNumTimes = (str, numOfTimes) => {
    if(numOfTimes <=0) return str;

    let resultingStr = ""
    for(let i=0;i<numOfTimes; i++) {
        resultingStr += str
        // resultingStr = resultinStr + str
    }

    return resultingStr
}

console.log(repeatStringNumTimes("abc", 3));
