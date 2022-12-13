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
function map(fn, arr){
    let result = [];

    arr.forEach((el) => {
        var res = fn(el)
        result.push(res)
    })
    return result
}

var arr = [1,2,3,4,5]
var newArr = map(function(el){
    return el*2
}, arr)

console.log(newArr);

// arr.map(function(){})