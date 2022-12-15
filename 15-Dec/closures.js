// var counter = (function() {
//     var count = 0;
//     return function() {
//         return count++
//     }

// }())


// console.log(counter()) 
// console.log(counter()) 
// console.log(counter()) 




function counter() {
    var count = 0;
    return function() {
        count = count + 1
        return count
    }
    // return count++;
}


const count = counter()


console.log(count())  //0
console.log(count())  //1
console.log(count())  //2