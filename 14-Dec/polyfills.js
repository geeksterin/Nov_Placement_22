// write a polyfill for filter
// const evenNumbers = numbers.filter((n) => n%2==0)
// console.log(evenNumbers)

// Array.prototype.myFilter = function(fn){
//     const arr = this;
//     const resultingArr = []
//     // arr.forEach
//     for(let i=0 ; i<arr.length; i++){
//         if(fn(arr[i])) {
//             resultingArr.push(arr[i])
//         }
//     }
//     return resultingArr;
// }

Array.prototype.even = function(){
    const result = [];
    this.forEach(el => {
        if(el%2==0){
            result.push(el)
        }
    })

    return result;
}

const numbers = [4,1,3,6,7,0,1,56]
// const filteredArr = numbers.myFilter((n) => n%2==0)

console.log(numbers.even())


numbers.even()

// write polyfill for find and flat methods

