// polyfill for flat


Array.prototype.flattenArray = function() {
    const arr = this;
    let flattenArr = []

    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])) {
            flattenArr = flattenArr.concat(arr[i].flattenArray())
        } else {
            flattenArr.push(arr[i])
        }
    }
    return flattenArr;

}

console.log([1,[2,3]].flattenArray())
// console.log(flat([[1,2], 3]))

// Array.prototype.myFlat = function(){
//     const flattenArr = []





//     return flattenArr;
// }



// const numbers = [1,[2,3], 4]
// numbers.myFlat() // [1,2,3,4]


// const flatten =(arr, result = [1,2,3,[4,5],6])=> {
//     for (let i = 0, length = arr.length; i < length; i++) {
//       const value = arr[i];
//       if (Array.isArray(value)) {
//         flatten(value, result);
//       } else {
//         result.push(value);
//       }
//     }
//    return result;
//   };
//    console.log(flatten);