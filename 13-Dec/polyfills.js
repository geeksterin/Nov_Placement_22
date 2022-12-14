var marks = [35,35,45,35,45]
// 90

// var percentages = marks.map((score, index) => {
//     console.log(score, index)
//     let percentage = (score*100) / 90;
//     return percentage;
// })

// ES6 syntax

// function calculatePercentage(score, index) {
//     return (score*100) / 90
// }

// var percentages = marks.map(calculatePercentage)
// console.log(percentages);

// Polyfill for map
Array.prototype.myMap = function myMap(fn){
    let result = [];

    this.forEach((el, i) => {
        var res = fn(el, i)
        result.push(res)
    })
    return result
}


var arr = [1,2,3,4,5]

var anotherArr = [2,1]

// prototypal inheritance / prototype inheritance
var newArr = arr.myMap(function(el, i){
    console.log(i)
    return el*2
})

var secondResult = anotherArr.myMap(function(el, i){
    console.log(i)

    return el*3
})



// var person = {}

// person.name = "tajammul"
// console.log(person)


// prototype -- 
// var newArr = arr.myMap(function(el){
//     return el*2
// })

// var newArrUsingMap = arr.map(function(el) {
//     return el * 2
// })

console.log(newArr);
console.log(secondResult);

// arr.map(function(){})