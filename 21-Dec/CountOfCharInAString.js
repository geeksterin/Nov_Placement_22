const countOfCharInAStr = (str) => {

    const strInLowerCase = str.toLowerCase()
    const lettersCountMap = {
    }

    for(let i=0; i<strInLowerCase.length; i++) {
        if(strInLowerCase.charAt(i) == " ") continue;

        // i = 4
        // My n
        // lettersCountMap.hasOwnProperty("n")

        // lettersCountMap[strInLowerCase.charAt(i)] = lettersCountMap[strInLowerCase.charAt(i)] + 1
        if(lettersCountMap.hasOwnProperty(strInLowerCase.charAt(i))){
            lettersCountMap[strInLowerCase.charAt(i)] += 1
        }else{
            lettersCountMap[strInLowerCase.charAt(i)] = 1
        }
    }

    return lettersCountMap

}   



console.log(countOfCharInAStr("My name is tajammul"))
// { m: 4, y: 1, n: 1, a: 3, e: 1, i: 1, s: 1, t: 1, j: 1, u: 1, l: 1 }


const person = {
    "name" :"asdf"
}

person.age = 20
person["age"] = 20